<?php 
defined('ROOT_DIR') || define('ROOT_DIR', realpath(__DIR__ . '/../'));
require_once ROOT_DIR . '/vendor/autoload.php';

$app = new Silex\Application();

$app->get('/hello/{name}', function ($name) use ($app) {
    return 'Hello ' . $app->escape($name);
});

$app->run();