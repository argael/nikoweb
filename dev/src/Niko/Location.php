<?php
namespace Niko;

use Niko\Exception\ControllerException;

// --------------------------------------------------------------------------------------------------------------------

class Location
{
    public $id = 0;
    public $name = 'n.c.';
    public $icon = '';
    public $hidden = false;

    protected $actions = [];

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
                default:
                    $this->$property = $value;
            }
        }
    }

    public function __toString()
    {
        return $this->name ?: sprintf('location:%d', $this->id);
    }

    public function toArray()
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'icon' => $this->icon,
            'hidden' => $this->hidden,
            'actions' => array_reduce($this->getActions(), function($actions, $action) {
                /* @var \Niko\Action $action */
                $actions[ $action->id ] = $action->toArray();
                return $actions;
            }),
        ];
    }

    public function addAction($action)
    {
        $this->actions[ $action->id ] = $action;
    }

    public function getActions()
    {
        return $this->actions;
    }
}
