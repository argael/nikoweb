<?php
namespace Niko;

use Niko\Exception\ControllerException;

// --------------------------------------------------------------------------------------------------------------------

class Action
{
    const ACTION_ON = 'on';
    const ACTION_OFF = 'off';
    const ACTION_UP = 'up';
    const ACTION_DOWN = 'down';
    const ACTION_TOGGLE = 'toggle';

    const ACTION_STORY = 0;
    const ACTION_SWITCH = 1;
    const ACTION_DIMMER = 2;
    const ACTION_SHUTTER = 4;

    const DIMMER_STEP = 10;

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

    public function state()
    {
        return $this->value != 0 && $this->value != 255;
    }

    public function typename()
    {
        return [
            self::ACTION_STORY => 'story',
            self::ACTION_SWITCH => 'switch',
            self::ACTION_DIMMER => 'dimmer',
            self::ACTION_SHUTTER => 'shutter',
        ][$this->type];
    }

    public function __toString()
    {
        return $this->name ?: sprintf('action:%d', $this->id);
    }

    public function toArray()
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'icon' => $this->icon,
            'value' => $this->value,
            'state' => $this->state(),
            'type' => $this->typename(),
            'location' => $this->location
        ];
    }

    public function run($do = self::ACTION_TOGGLE)
    {
        switch($this->type) {
            case self::ACTION_STORY:
                $value = 1; break;

            // On / Off
            case self::ACTION_SWITCH:
                $value = $this->state() ? 0 : 1;
                break;

            // Dimmer
            case self::ACTION_DIMMER:
                if ($do == self::ACTION_DOWN) {
                    $value = max(1, $this->value - self::DIMMER_STEP);
                }
                elseif ($do == self::ACTION_UP) {
                    $value = $this->state()
                        ? min(100, $this->value + self::DIMMER_STEP)
                        : 1;
                }
                else {
                    $value = $this->state() ? 255 : 254;
                }
                break;

            // Shutter
            case self::ACTION_SHUTTER:
                $value = !$this->state() ? 255 : 254;
                break;
        }

        if (false !== Controller::load()->setAction($this->id, $value)) {
            $this->value = $value;
        }

        return $this->toArray();
    }

    public function addProperties($properties=[])
    {
        foreach($properties as $property => $value) {
            switch($property) {
                case 'value1':
                    $this->value = $value;
                    $this->state();
                    break;
                case 'value2':
                case 'value3':
                    break;
                default:
                    $this->$property = $value;
            }
        }
    }
}
