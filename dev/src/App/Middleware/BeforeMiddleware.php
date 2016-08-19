<?php
namespace App;

use \Niko\Controller;
use \Symfony\Component\HttpFoundation\Request;
use \Silex\Application;

// --------------------------------------------------------------------------------------------------------------------
/* @var \Silex\Application $app */

$app->before(function(Request $request, Application $app)  {
    $app['app.config'] = function() {
        return include ROOT_DIR . '/datas/config.php';
    };

    $app['niko'] = function ($app) {
        return Controller::load(
            $app['app.config']['nhc']['address'] ?: '192.168.1.2', // Sample address
            $app['app.config']['nhc']['port'] ?: 8000,
            $app['app.config']
        );
    };
});
