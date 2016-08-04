<?php
namespace Niko;

use Niko\Exception\NikoException;

class Niko
{
    protected static $instance;
    protected $socket;

    protected $nhc;

    /**
     * Niko constructor.
     *
     * @param string $address
     * @param int $port
     * @throws NikoException
     */
    private function __construct($address, $port=8000)
    {
        if (false === ($this->socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP))) {
            throw new NikoException("Error Creating Socket", 1);
        }

        if (false === socket_connect($this->socket, $address, $port)) {
            throw new NikoException("Error Connecting Socket", 1);
        }

        $this->initNhc();
    }

    /**
     * Factory method for singleton class
     *
     * @param string $address
     * @param int $port
     *
     * @return Niko
     */
    public static function load($address, $port=8000)
    {
        if(!self::$instance) {
            self::$instance = new self($address, $port);
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
     * @throws NikoException
     */
    protected function send($message)
    {
        if (false === socket_write($this->socket, $message, strlen($message))) {
            throw new NikoException("Error Sending Command", 1);
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
     * @throws NikoException
     */
    protected function sendCommand($command, $options=[])
    {
        $command = json_encode(array_merge(['cmd' => $command], $options));
        $datas = json_decode($this->send($command), true);
        return $datas['data'];
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

    public function initNhc()
    {
        $nhcLocations = $this->sendCommand('listlocations');
        $nhcActions = $this->sendCommand('listactions');

        $this->nhc = array_reduce($nhcLocations, function($locations, $location) use ($nhcActions) {
            $locations[ $location['id'] ] = array_merge(
                $location,
                ['actions' => array_reduce($nhcActions, function($actions, $action) use ($location) {
                    if ($action['location'] == $location['id']) {
                        $actions[ $action['id'] ] = $action;
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

    public function setAction($id, $value = 0)
    {
        return $this->sendCommand('executeactions', ['id' => $id, 'value1' => $value]);
    }

    public function getActions()
    {
        $actions = [];
        array_walk($this->nhc, function($location) use (&$actions) {
            $actions = array_merge($actions, $location['actions'] ?: []);
        });

        return $actions;
    }

    // ------------------------------------------------------------------------

    public function getLocationActions()
    {
        $locations = $this->getLocations();
        $actions = $this->getActions();

        return array_map(function($location) use ($actions) {
            $location['actions'] = array_filter($actions, function($action) use ($location) {
                return ($action['location'] == $location['id']);
            });

            return $location;
        }, $locations);
    }
}
