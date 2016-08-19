<?php
namespace App;

use \Silex\Application;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

// --------------------------------------------------------------------------------------------------------------------
/* @var \Silex\Application $app */

$app->after(function(Request $request, Response $response) use ($app) {
    $niko = $app['niko'];
    $niko->close();
});
