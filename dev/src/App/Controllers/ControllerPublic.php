<?php
namespace App\Controllers;

/**
 * Debug - Show the list of locations and actions
 *
 * @var \Silex\Application $app
 */
$app->get('/debug', function () use ($app) {
    return $app['twig']->render('debug.html.twig', [
        'testdate' => date('c')
    ]);
});
