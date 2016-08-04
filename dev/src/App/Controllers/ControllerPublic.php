<?php
namespace App\Controllers;

/**
 * @var \Silex\Application $app
 */

$app->get('/', function () use ($app) {
    return $app['twig']->render('index.html.twig', ['locations' => $app['niko']->toArray()]);
})->bind('homepage');

/**
 * Get actions status or execute it according the value
 */
$app->get('/action/{id}/{value}', function ($id, $value=null) use ($app) {
    $niko = $app['niko']; /* @var \Niko\Niko $niko */

    $action = $niko->getAction($id);
    $action['value1'] = $niko->setAction($id, $value)
        ? $value
        : false;

    return sprintf('<pre>%s</pre>', print_r($action ?: false, true));
})
  ->value('value', -1)
  ->bind('actions.run');

// --------------------------------------------------------------------------------------------------------------------

/**
 * DEBUG - Retrieve all availables actions by locations
 */
$app->get('/actions', function () use ($app) {
    return sprintf('<pre>%s</pre>', print_r($app['niko']->toArray(), true));
});

$app->get('/test', function () use ($app) {
    $app['niko']->testCommand('getmsgs');
});
