<?php
namespace App\Controllers;

/**
 * Debug - Show the list of locations and actions
 *
 * @var \Silex\Application $app
 */


$app->get('/', function () use ($app) {
    return $app['twig']->render('index.html.twig', [
        'testdate' => date('c')
    ]);
});
