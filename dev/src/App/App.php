<?php
namespace App;

use Silex\Application;
use Silex\Provider\TwigServiceProvider;

use Niko\Niko;

// --------------------------------------------------------------------------------------------------------------------

$config = require_once ROOT_DIR . '/datas/config.php';

$app = new Application();
$niko = new Niko($config['nhc']['address'] ?: '10.0.0.30', $config['nhc']['port'] ?: 8000);

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
