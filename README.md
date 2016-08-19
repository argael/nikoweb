# Web interface for Controller Home Control (NHC)

> **Warning WIP !** Use it at you own risk.

This project is a remastering of [jaader/PortailNHC](https://github.com/jaader/PortailNHC).

It's a web interface that control [Controller Home Control](http://www.niko.eu/frbe/niko/nhc-landingspage) electrical installation.

![Screenshot](docs/files/screenshot.png) 
 
## Sources

The main source code is in `dev` folder. It's based on **Silex** and **Twig**.

You must execute `composer install` in the `dev` folder to install the different libraries used by the app.
 
## Usage

From the project root folder :

* **PHP Serv** : Use the interal PHP server with `php -S 0.0.0.0:8080 -t dev/public` 
* **Docker** : you can use `docker-compose start` from the project root folder.

_I also use `nginx-proxy` container and `dns-mask` to access the app with a domain : http://nikoweb.dok._
