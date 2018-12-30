<?php
namespace App;

use Silex\Application;
use Silex\Provider\TwigServiceProvider;

// --------------------------------------------------------------------------------------------------------------------

// Create Silex Applcation object
$app = new Application();
$app['debug'] = true;

$app->register(new TwigServiceProvider(), [
    'twig.path' => ROOT_DIR . '/views',
    'twig.options' => [ 'cache' => ROOT_DIR . '/cache' ]
]);

// --------------------------------------------------------------------------------------------------------------------

//require_once ROOT_DIR . '/src/App/Middleware/BeforeMiddleware.php';

require_once ROOT_DIR . '/src/App/Controllers/ControllerPublic.php';

//require_once ROOT_DIR . '/src/App/Middleware/AfterMiddleware.php';

// --------------------------------------------------------------------------------------------------------------------

$app->run();
