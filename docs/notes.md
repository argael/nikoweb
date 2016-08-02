# Notes - Fonctionnement de l'application

* Il s'agit d'une application WEB

* Mettre en place HTTPS via lentencryt sur le Raspberry

* L'applcation tourne sur un RPi...

* Dans un 1er temps, la configuration et les donnees seront stockées dans des fichiers pour simplifier le développement.

* La liste des zones et (Locations/Actionss) sera sauvegardée dans l'application et mise a jour durant la nuit via un cron (ou manuellement par le biais d'un bouton dans la page de configuration).

* Dans la page de configuration, modifier l'adresse ou le port du NHC implique automatiquement le rechargement de la liste "Locations/Actions".

* Lors de la premiere connexion, la liste "Locations/Actions" sera récupérée depuis le NHC et enregistrée dans un fichier de configuration.
 
## Ecrans

* L'ecran principale de l'application affiche la liste des derniers messages et alertes.

* Le menu principal permet de sélectionner la zone

* Une fois la zone sélectionnée, l'application affiche la liste des actions possibles.

* Pour chaque action, on affiche sa valeur : `off - on`, `off - 1% > 100%`

## Smartphone / Tablet

* L'application doit être "plaçable en home"

