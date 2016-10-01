<?php
namespace Niko;

use Niko\Exception\ControllerException;

// --------------------------------------------------------------------------------------------------------------------

class Action
{
    const ACTION_STORY = 0;
    const ACTION_SWITCH = 1;
    const ACTION_DIMMER = 2;
    const ACTION_SHUTTER = 4;

    public $id;
    public $name;
    public $icon;
    public $type;
    public $location;
    public $value;

    public function __construct($properties=[])
    {
        $this->id = 0;
        $this->name = 'n.a.';
        $this->type = self::ACTION_SWITCH;
        $this->location = 0;
        $this->value = 0;

        if ($properties) {
            if (!isset($properties['id']) || !isset($properties['name'])) {
                throw new ControllerException('Missing properties');
            }
            $this->addProperties($properties);
        }
    }

    public function addProperties($properties=[])
    {
        foreach($properties as $property => $value) {
            switch($property) {
                case 'value1':
                    $this->value = $value;
                    break;
                case 'value2':
                case 'value3':
                    break;
                default:
                    $this->$property = $value;
            }
        }
    }

    public function run($value=null)
    {
        Controller::load()->setAction($this->id, $value);
    }

    public function __toString()
    {
        return $this->name;
    }

    public function toArray()
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'icon' => $this->icon,
            'value' => $this->value,
            'type' => $this->type,
            'location' => $this->location
        ];
    }
}
