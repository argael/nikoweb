<?php return [
    /**
     * NHC Module access
     */
    'nhc' => [
        'address' => '10.0.0.30',
        'port' => 8000
    ],

    /**
     * Use to extend the "Locations" grabbed from NHC (with icon and more)
     */
    'locations' => [
        1 => ['icon' => 'glyphicon glyphicon-tree-deciduous'],
        2 => ['icon' => 'fa fa-home'],
        5 => ['icon' => 'glyphicon glyphicon-bed'],
        6 => ['icon' => 'fa fa-heart'],
        7 => ['icon' => 'fa fa-bed'],
        8 => ['icon' => 'fa fa-bed'],
        9 => ['icon' => 'fa fa-moon-o', 'exclude' => true],
        11 => ['icon' => 'fa fa-briefcase'],
        12 => ['icon' => 'fa fa-book'],
        14 => ['icon' => 'fa fa-calendar-check-o'],
    ],

    /**
     * Use to extend the "Actions" grabbed from NHC (with icon and more)
     */
    'actions' => [
        4 => ['icon' => 'glyphicon glyphicon-lamp', 'name' => 'Lampe'],
        3 => ['icon' => 'fa fa-plug', 'name' => 'Prise'],
        10 => ['icon' => 'fa fa-moon-o'],
        11 => ['icon' => 'glyphicon glyphicon-align-justify'],
        13 => ['icon' => 'glyphicon glyphicon-align-justify'],
        31 => ['exclude' => true],
    ]
];
