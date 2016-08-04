# Protocol NHC

> Cette mini-documentation est basée sur le WIKI de [jaader](https://github.com/jaader/PortailNHC).

Les communications entre l'app et l'interface sont codée en JSON.

1. Récupération des infos sur le système : `systeminfo`

        SOCKET-OUT : {"cmd":"systeminfo"}
        SOCKET-IN : {"cmd":"systeminfo","data":{"swversion":"1.10.0.34209","api":"1.19","time":"20150928193828","language":"EN","currency":"EUR","units":0,"DST":0,"TZ":0,"lastenergyerase":"","lastconfig":""}}

2. Récupération des zones : `listlocations`

        SOCKET-OUT: {"cmd":"listlocations"}
        SOCKET-IN: {"cmd":"listlocations","data":[{"id":0,"name":""},{"id":1,"name":"Séjour"},{"id":2,"name":"Cuisine"},{"id":3,"name":"Hall"},{"id":5,"name":"SDB"},{"id":6,"name":"Chambre Parents"},{"id":7,"name":"Bureau"},{"id":8,"name":"Chambre Mlle"},{"id":10,"name":"Général"}]}

3. Récupération des actions : `listactions`

        SOCKET-OUT: {"cmd":"listactions"}
        SOCKET-IN: {"cmd":"listactions","data":[{"id":0,"name":"Appliques salon","type":1,"location":1,"value1":0}, {"id":24,"name":"Lampe SAM","type":1,"location":1,"value1":0},{"id":1,"name":"Toutes lampes meubles","type":1,"location":1,"value1":0},{"id":2,"name":"Lampe cuisine","type":1,"location":2,"value1":0},{"id":3,"name":"Prises cuisine","type":1,"location":2,"value1":0},{"id":20,"name":"Lampe salon","type":1,"location":1,"value1":0},{"id":25,"name":"Lampe","type":1,"location":6,"value1":0},{"id":26,"name":"Lampe chevet Benoît","type":1,"location":6,"value1":100},{"id":27,"name":"Lampe chevet Murielle","type":1,"location":6,"value1":100},{"id":28,"name":"Depart maison","type":0,"location":3,"value1":0}, {"id":29,"name":"action Toujours ON","type":0,"location":10,"value1":100},{"id":31,"name":"Lampe + Prises","type":1,"location":5,"value1":0},{"id":32,"name":"Ambiance TV","type":1,"location":1,"value1":0}, {"id":33,"name":"Ambiance Fête","type":1,"location":1,"value1":0},{"id":52,"name":"Volets Chambre Parents","type":4,"location":6,"value1":0,"value2":27,"value3":27}]}

    Type d'actions :

    * 0 démarrage mais pas de d'arrêt (scénarios)
    * 1 on/off
    * 4 volet/moteur

---

4. Exécution d'une action simple (on/off) (type 1)

        # Démarrer
        SOCKET-OUT: {"cmd":"executeactions", "id":0,"value1":100}
        SOCKET-IN: {"cmd":"executeactions","data":{"error":0}}

        # Arrêter
        SOCKET-OUT: {"cmd":"executeactions", "id":0,"value1":0}
        SOCKET-IN: {"cmd":"executeactions","data":{"error":0}}

5. Utilisation de Dimmer (type 1)

    _Le dimmer fonctionne comme le switch simple mais la `valeur1` peut varier de 0 à 100._

        SOCKET-OUT: {"cmd":"executeactions", "id":0,"value1":40}  <-- Définir l'intensité à 40%

6. Récuper les messages "Alarme"

        SOCKET-OUT: {"cmd":"getalarms"}
        SOCKET-IN: {"cmd":"getalarms","data":{id: 4,type: 0,date: "20160728212809",text: "Mode Nuit désactivé.",confirmed: 1},{id: 3,type: 1,date: "20160728212806",text: "Mode Nuit activé",confirmed: 0},}

---

## Autres commandes a documenter

* listthermostat
* listthermostatHVAC
* startevents : permet de démarrer un scenario ?
* readtariffdata : recuperer la liste des alarmes
