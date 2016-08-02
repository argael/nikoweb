<?php
defined('ROOT_DIR') || define('ROOT_DIR', realpath(__DIR__ . '/../'));
require_once ROOT_DIR . '/vendor/autoload.php';
require_once ROOT_DIR . '/src/App/App.php';

//$config = require_once ROOT_DIR . '/datas/config.php';
//$app = new Silex\Application();
//$niko = new \Niko\Niko($config['nhc']['address'] ?: '10.0.0.30', $config['nhc']['port'] ?: 8000);
//
//$app->get('/debug', function () use ($app, $niko) {
//    return '<pre>' . print_r($niko->getLocationActions(), true);
//});
