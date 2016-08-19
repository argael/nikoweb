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

    $action = $niko->getAction($id);
    $action['value1'] = $niko->setAction($id, $value);

    return $app->json($action);
})
  ->value('value', -1)
  ->bind('actions.run');

// --------------------------------------------------------------------------------------------------------------------

/**
 * DEBUG - Retrieve all availables actions by locations
 */
$app->get('/actions', function () use ($app) {
    return sprintf('<pre>%s</pre>', print_r($app['niko']->allActions(), true));
});

/**
 * DEBUG - Execute action
 */
$app->get('/test', function () use ($app) {
    $app['niko']->testCommand('getmsgs');
});
