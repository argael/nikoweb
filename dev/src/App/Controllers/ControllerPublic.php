<?php
namespace App\Controllers;

// --------------------------------------------------------------------------------------------------------------------
/* @var \Silex\Application $app */

/**
 * Application Home - display the list of locations and actions
 */
$app->get('/', function () use ($app) {
    $niko = $app['niko']; /* @var \Niko\Controller $niko */
    return $app['twig']->render('index.html.twig', [
        'locations' => $niko->toArray()
    ]);
})->bind('homepage');

/**
 * Get actions status or execute it, according the presence of a value
 */
$app->get('/action/{id}/{value}', function ($id, $value=null) use ($app) {
    $niko = $app['niko']; /* @var \Niko\Controller $niko */
    $action = $niko->runAction($id, $value);
    return $app->json($action);
})->value('value', '')->bind('actions.run');

// --------------------------------------------------------------------------------------------------------------------

/**
 * DEBUG - Test command
 */
$app->get('/command/{action}', function ($action) use ($app) {
    $niko = $app['niko']; /* @var \Niko\Controller $niko */
    return $app->json($niko->sendCommand($action));
})->bind('actions.command');

$app->get('/list', function () use ($app) {
    $niko = $app['niko']; /* @var \Niko\Controller $niko */
    return $app->json($niko->allActions());
})->bind('actions.list');