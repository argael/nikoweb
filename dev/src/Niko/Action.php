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
    public $values;

    public function __construct($propeties=[])
    {
        if ($propeties) {
            if (!isset($propeties['id']) || !isset($propeties['name'])) {
                throw new ControllerException('Missing properties');
            }

            $this->id = $propeties['id'];
            $this->name = $propeties['name'];
            $this->icon = isset($propeties['icon']) ? $propeties['icon'] : '';

            $this->type = isset($propeties['type'])
                ? $propeties['type']
                : self::ACTION_SWITCH;

            $this->location = isset($propeties['location'])
                ? $propeties['location']
                : 0;

            $this->values = ['value1' => isset($propeties['value1']) ? $propeties['value1'] : 0];
            isset($propeties['value2']) and $this->values['value2'] = $propeties['value2'];
            isset($propeties['value3']) and $this->values['value3'] = $propeties['value3'];
        }
    }

    public function run($value=null)
    {
        Controller::load()->setAction(
            $this->id,
            $value
        );

    }
}
