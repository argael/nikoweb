<?php
namespace App\Controllers;

/**
 * @var \Silex\Application $app
 */

$app->get('/', function () use ($app) {
    return $app['twig']->render('index.html.twig', ['locations' => $app['niko']->toArray()]);
})->bind('homepage');

/**
 * DEBUG - Retrieve all availables actions by locations
 */
$app->get('/actions', function () use ($app) {
    return sprintf('<pre>%s</pre>', print_r($app['niko']->getActions(), true));
})->bind('actions.list');;

/**
 * Get actions status or execute it according the value
 */
//$app->get('/action/{id}/{value}', function ($id, $value=null) use ($app) {
//    $actions = array_map(function($action) use ($niko, $id, $value) {
//        if($value >= 0) {
//            $response = $niko->setAction($id, min(100, max(0, $value)));
//            $action['value1'] = ($response['error'] == 0) ? $value : false;
//        }
//        return $action;
//    },
//    array_filter($niko->getActions(), function($action) use ($id) {
//        return $action['id'] == $id;
//    }));
//
//    return sprintf('<pre>%s</pre>', print_r(array_pop($actions), true));
//})
//  ->value('value', -1)
//  ->bind('actions.run');
