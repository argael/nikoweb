<?php
namespace App;
/**
 * @var \Silex\Application $app
 * @var \Niko\Niko $niko
 */

use \Silex\Application;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

$app->after(function(Request $request, Response $response) use ($app) {
    $app['niko']->close();
});
