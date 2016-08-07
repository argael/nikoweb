<?php
namespace Niko;

use Niko\Niko;
use Niko\Exception\NikoActionException;

class Action
{
    const ACTION_STORY = 0;
    const ACTION_SWITCH = 1;
    const ACTION_SHUTTER = 4;

    public $id;
    public $name;
    public $type;
    public $location;
    public $value;
    public $values;

    public function __construct($propeties=[])
    {
        if ($propeties) {
            if (!isset($propeties['id']) || !isset($propeties['name'])) {
                throw new NikoActionException('Invalid properties');
            }

            $this->id = $propeties['id'];
            $this->id = $propeties['id'];

            $this->type = isset($propeties['type'])
                ? $propeties['type']
                : self::ACTION_SWITCH;

            $this->location = isset($propeties['location'])
                ? $propeties['location']
                : 0;

            $this->value = isset($propeties['value1'])
                ? $propeties['value1']
                : 0;

            $this->values = [];
        }
    }
}
