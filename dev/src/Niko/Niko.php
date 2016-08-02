<?php
namespace Niko;

use Niko\Exception\NikoException;

class Niko
{
    protected $socket;

    public function __construct($address, $port=8000)
    {
        if (false === ($this->socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP))) {
            throw new NikoException("Error Creating Socket", 1);
        }

        if (false === socket_connect($this->socket, $address, $port)) {
            throw new NikoException("Error Connecting Socket", 1);
        }
    }

    protected function send($message)
    {
        if (false === socket_write($this->socket, $message, strlen($message))) {
            throw new NikoException("Error Sending Command", 1);
        }

        sleep(1); // Beurk.

        $response = '';
        while (0 != socket_recv($this->socket, $out, 4096, MSG_DONTWAIT)) {
            $response .= $out;
        };

        return $response;
    }

    protected function sendCommand($command)
    {
        $command = json_encode($command);
        $datas = json_decode($this->send($command), true);
        return $datas['data'];
    }

    public function close()
    {
        if($this->socket) {
            socket_close($this->socket);
        }
    }

    // ------------------------------------------------------------------------

    public function getInformations()
    {
        return $this->sendCommand(['cmd' => 'systeminfo']);
    }

    public function getLocations()
    {
        return $this->sendCommand(['cmd' => 'listlocations']);
    }

    public function getActions()
    {
        return $this->sendCommand(['cmd' => 'listactions']);
    }

    public function setAction($id, $value = 0)
    {
        return $this->sendCommand([
            'cmd' => 'executeactions',
            'id' => $id,
            'value1' => $value
        ]);
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

    public function testAction()
    {

    }
}
