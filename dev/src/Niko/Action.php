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

    static protected $types = [
        self::ACTION_STORY => 'story',
        self::ACTION_SWITCH => 'switch',
        self::ACTION_DIMMER => 'dimmer',
        self::ACTION_SHUTTER => 'shutter',
    ];

    public $id = 0;
    public $name = 'n.c.';
    public $icon = '';
    public $type = self::ACTION_SWITCH;
    public $location = 0;
    public $value = 0;
    public $hidden = false;

    public function __construct($properties=[])
    {
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

    public function __toString()
    {
        return $this->name ?: sprintf('action:%d', $this->id);
    }

    public function toArray()
    {
        return [
            'id' => $this->id,
            'name' => $this->name . " test",
            'icon' => $this->icon,
            'value' => $this->value,
            'type' => $this->getTypeName(),
            'location' => $this->location
        ];
    }

    public function getTypeName()
    {
        return self::$types[$this->type];
    }

    public function run($value=-1)
    {
        if($value < 0) {
            $value = ($this->value > 0) ? 0 : 100;
        }

        switch($this->type) {
            case self::ACTION_STORY:
                $value = 1; break;

            // On / Off
            case self::ACTION_SWITCH:
                $value = min(1, max(0, $value)); break;

            // Dimmer
            case 2:
                if($this->value < 1) {
                    $value = 1;
                }
                elseif($this->value < 100) {
                    $value = min(100, floor(1 + $this->value/10) * 10);
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

        if (false !== Controller::load()->setAction($this->id, $value)) {
            $this->value = $value;
        }

        return $value;
    }
}
