<?php
namespace App;
/**
 * @var \Silex\Application $app
 */

use \Niko\Controller;
use \Symfony\Component\HttpFoundation\Request;
use \Silex\Application;

$app->before(function(Request $request, Application $app)  {
    $app['app.config'] = function() {
        return include ROOT_DIR . '/datas/config.php';
    };

    $app['niko'] = function ($app) {
        return Controller::load(
            $app['app.config']['nhc']['address'] ?: '10.0.0.30',
            $app['app.config']['nhc']['port'] ?: 8000,
            $app['app.config']
        );
    };
});
