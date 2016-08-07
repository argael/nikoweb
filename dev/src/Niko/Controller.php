<?php
namespace Niko;

use Niko\Exception\ControllerException;

class Controller
{
    protected static $instance;
    protected $socket;

    protected $nhc;

    /**
     * Controller constructor.
     *
     * @param string $address
     * @param int $port
     *
*@throws ControllerException
     */
    private function __construct($address, $port=8000, $options=[])
    {
        if (!$address) {
            throw new ControllerException("No address specified.", 1);
        }

        if (false === ($this->socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP))) {
            throw new ControllerException("Unable to create the socket", 1);
        }

        if (false === socket_connect($this->socket, $address, $port)) {
            throw new ControllerException("Unable to connect the socket", 1);
        }

        $this->initNhc($options);
    }

    /**
     * Factory method for singleton class
     *
     * @param string $address
     * @param int $port
     *
     * @return Controller
     */
    public static function load($address=null, $port=8000, $options=[])
    {
        if(!self::$instance) {
            self::$instance = new self($address, $port, $options);
        }
        return self::$instance;
    }

    // ----------------------------------------------------------------------------------------------------------------

    /**
     * Send message to NHC
     *
     * @param $message
     *
     * @return string
     * @throws ControllerException
     */
    protected function send($message)
    {
        if (false === socket_write($this->socket, $message, strlen($message))) {
            throw new ControllerException("Error Sending Command", 1);
        }

        $response = '';
        do {
            $bytes = socket_recv($this->socket, $out, 256, 0);
            $response .= trim($out);
        }
        while ($bytes == 0 || $bytes == 256);

        return $response;
    }

    /**
     * Send command with options to NHC and decode the response
     *
     * @param String $command
     * @param array $options
     *
     * @return mixed
     * @throws ControllerException
     */
    protected function sendCommand($command, $options=[])
    {
        $command = json_encode(array_merge(['cmd' => $command], $options));
        $datas = json_decode($this->send($command), true);
        return $datas['data'];
    }

    public function testCommand($command, $options=[])
    {
        $command = json_encode(array_merge(['cmd' => $command], $options));
        echo '<pre>', print_r($this->send($command), true), '</pre>'; exit;
    }

    /**
     * Close the connection to NHC
     */
    public function close()
    {
        if($this->socket) {
            socket_close($this->socket);
        }
    }

    public function initNhc($options=[])
    {
        $nhcLocations = $this->sendCommand('listlocations');
        $nhcActions = $this->sendCommand('listactions');

        $this->nhc = array_reduce($nhcLocations, function($locations, $location) use ($nhcActions, $options) {
            $locations[ $location['id'] ] = array_merge(
                $location,
                $options['locations'][$location['id']] ?: [],
                ['actions' => array_reduce($nhcActions, function($actions, $action) use ($location, $options) {
                    if ($action['location'] == $location['id']) {
                        $actions[ $action['id'] ] = array_merge(
                            $action,
                            $options['actions'][$action['id']] ?: []
                        );
                    }
                    return $actions;
                })]
            );
            return $locations;
        }, []);
    }

    public function toArray()
    {
        return $this->nhc;
    }

    // ----------------------------------------------------------------------------------------------------------------

    public function getInformations()
    {
        return $this->sendCommand('systeminfo');
    }

    public function allActions()
    {
        $actions = [];
        array_walk($this->nhc, function($location) use (&$actions) {
            $actions += $location['actions'] ?: [];
        });

        return $actions;
    }

    public function getAction($id)
    {
        $actions = $this->allActions();
        return isset($actions[$id]) ? $actions[$id] : false;
    }

    public function setAction($id, $value = 0)
    {
        $action = $this->getAction($id);
        if ($action) {
            if($value < 0) {
                $value = ($action['value1'] > 0) ? 0 : 100;
            }

            switch($action['type']) {
                case 0:
                    $value = 1; break;

                // On / Off
                case 1:
                    $value = min(1, max(0, $value));
                    break;

                // Dimmer
                case 2:
                    if($action['value1'] < 1) {
                        $value = 1;
                    }
                    elseif($action['value1'] < 100) {
                        $value = min(100, floor(1 + $action['value1']/10) * 10);
                    }
                    else {
                        $value = 0;
                    }
                    break;

                // Shutter
                case 4:
                    $value = min(100, max(0, $value));
                    break;
            }

            $response = $this->sendCommand('executeactions', ['id' => $id, 'value1' => $value]);
            return ($response && $response['error'] == 0) ? $value : false;
        }

        return false;
    }
}
