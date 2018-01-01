<?php
namespace Niko;

use Niko\Exception\ControllerException;
use Niko\Exception\ControllerSocketException;

// ----------------------------------------------------------------------------

/**
 * NHC Controller Class
 *
 * @package Niko
 */
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
     * @param array $options
     *
     * @throws ControllerException
     * @throws ControllerSocketException
     */
    private function __construct($address, $port=8000, $options=[])
    {
        if (!$address) {
            throw new ControllerException("No address specified.", 1);
        }

        $this->socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
        if (false === $this->socket) {
            throw new ControllerSocketException('Unable to create the socket');
        }

        if (false === socket_connect($this->socket, $address, $port)) {
            throw new ControllerSocketException('Unable to connect the socket');
        }

        $this->initNhc($options);
    }

    /**
     * Factory method for singleton class
     *
     * @param string $address
     * @param int $port
     * @param array $options
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

    // ------------------------------------------------------------------------

    /**
     * Create a nested array with "locations" and "actions" from NHC
     *
     * @param array $options
     */
    private function initNhc($options=[])
    {
        $nhcLocations = $this->sendCommand('listlocations') ?: [];
        $nhcActions = $this->sendCommand('listactions') ?: [];

        array_walk($nhcLocations, function($location) use ($nhcActions, $options) {
            $nhcLocation = new Location($location);
            $nhcLocation->addProperties($options['locations'][$location['id']] ?: []);

            array_walk($nhcActions, function($action) use ($nhcLocation, $options) {
                if ($action['location'] == $nhcLocation->id) {
                    $nhcAction = new Action($action);
                    $nhcAction->addProperties($options['actions'][ $action['id'] ] ?: []);

                    $nhcAction->hidden || $nhcLocation->addAction($nhcAction);
                }
            });

            $nhcLocation->hidden || $this->addLocation($nhcLocation);
        });
    }

    private function addLocation($location)
    {
        $this->nhc[ $location->id ] = $location;
    }

    /**
     * Send message to NHC
     *
     * @param $message
     *
     * @return string
     * @throws ControllerException
     * @throws ControllerSocketException
     */
    public function send($message)
    {
        if (false === ($bytes = socket_write($this->socket, $message, strlen($message)))) {
            throw new ControllerSocketException('Error while sending command');
        }

        usleep(100000);

        $response = '';
        while($recieved = socket_recv($this->socket, $out, 2048, MSG_DONTWAIT)) {
            $response = $response . trim($out);
        }

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
    public function sendCommand($command, $options=[])
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

    public function toArray()
    {
        return array_reduce($this->nhc, function($locations, $location) {
            /* @var Location $location */
            $locations[ $location->id ] = $location->toArray();
            return $locations;
        });
    }

    // ------------------------------------------------------------------------

    /**
     *  From NHC, get general informations.
     */
    public function getInformations()
    {
        return $this->sendCommand('systeminfo');
    }

    /**
     *  List all availables actions (stored in class)
     */
    public function allActions()
    {
        $actions = [];
        array_walk($this->nhc, function($location) use (&$actions) {
            /* @var Location $location */
            $actions += $location->getActions();
        });

        return $actions;
    }

    /**
     * Get a specific action from stored list
     *
     * @param $id
     * @return bool|Action
     */
    public function getAction($id)
    {
        $actions = $this->allActions();
        return isset($actions[$id]) ? $actions[$id] : false;
    }

    /**
     * Send the value to NHC for a stored action
     *
     * @param $id
     * @param $value
     * @return bool|Action
     */
    public function setAction($id, $value=-1)
    {
        $response = $this->sendCommand('executeactions', ['id' => $id, 'value1' => $value]);
        return ($response && $response['error'] == 0) ? $value : false;
    }

    public function runAction($id, $value) {
        return $this->getAction($id)->run($value);
    }
}
