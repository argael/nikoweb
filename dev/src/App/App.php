<?php
namespace App;

use Silex\Application;
use Silex\Provider\TwigServiceProvider;

// --------------------------------------------------------------------------------------------------------------------

$app = new Application();

// --------------------------------------------------------------------------------------------------------------------

$app->register(new TwigServiceProvider(), [
    'twig.path' => ROOT_DIR . '/views',
    'twig.options' => [ 'cache' => ROOT_DIR . '/cache' ]
]);

//$app['twig'] = $app->extend('twig', function ($twig, $app) {
//    return $twig;
//});

// --------------------------------------------------------------------------------------------------------------------

require_once ROOT_DIR . '/src/App/Controllers/ControllerPublic.php';

// --------------------------------------------------------------------------------------------------------------------

$app->run();
