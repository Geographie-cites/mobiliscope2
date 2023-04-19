// Déclaration des variables géométriques propres à l'enquête observée

// Source des données
var dataSource = "Enquête Déplacements Ville Moyenne (EDVM) 2014 - Longwy / Nord 54 et Pays-Haut Val d’Alzette, Cerema (prod.), Progedo (distrib.)";

// Centrer la projection leaflet sur la ville centre (load.js)
var setview = [49.33, 5.81];
// Paramétrer les niveaux de zoom leaflet (load.js)
var zoom = 10;
var minZoom = 10;

// stocker max bounds
var myBounds ;

// Stockage du nom de la 1ere colonne dans le csv dataSect (sert à pointer vers les valeurs min et max pour l'affichage du graph simple)
var nomCol = '120';
var nameSec = "LONGWY BAS";

// Adapter la taille min/max des cercles proportionnels en fonction des ordres de grandeur des données (load.js)
var radiusRange = [0, 260];

// Déclaration des valeurs des cercles proportionnels des légendes uniques (load.js)
var datasetProp = [9000, 5000, 2000, 100],
datasetFlow = [3000, 1500, 500, 100];

// Seuils des liens (carte et légende flow)
var sLink = [100, 250, 500, 900];

