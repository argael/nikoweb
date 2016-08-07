<?php
namespace App;
/**
 * @var \Silex\Application $app
 */

use \Silex\Application;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

$app->after(function(Request $request, Response $response) use ($app) {
    $niko = $app['niko'];
    $niko->close();
});
