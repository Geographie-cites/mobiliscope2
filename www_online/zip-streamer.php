<?php
require 'vendor/autoload.php';

$files = (!empty($_GET['files'])) ? $_GET['files'] : '';

$filesArray = explode(',',$files);

$tmp = explode('/',$filesArray[0]); // here we suppose the first file sent is always the data/city

// rename zip folder 
if (strstr($tmp[4], 'choro')) {
    $name = str_replace('_choro_stacked.csv', '_pct', $tmp[4]);
} else if (strstr($tmp[4], 'prop')) {
    $name = str_replace('_prop_stacked.csv', '_nb', $tmp[4]);
} else if (strstr($tmp[4], 'flow')) {
    $name = str_replace('_flow_stacked.csv', '_nbNoResid', $tmp[4]);
} else if ($tmp[3] == 'segreg') {
    $name = str_replace('.csv', '', $tmp[4]);
};

$city = $tmp[2];
$zipfile = 'data_'. $city . '_' . $name .'.zip';

// enable output of HTTP headers
$options = new ZipStream\Option\Archive();
$options->setSendHttpHeaders(true);

// create a new zipstream object
$zip = new ZipStream\ZipStream($zipfile, $options);

// récupération des sous-dossiers tels quels
/*foreach($filesArray as $file){
    $parts = explode('/', $file);
    array_splice($parts ,0, - count($parts) + 2  );
    $file = implode('/', $parts);
    $file = str_replace('..', '', $file);
    $file = "./data/" . $file;
    $zip->addFileFromPath($file, $file);
}*/

// add all files in unique folder.zip and rename files v4-1
/*foreach($filesArray as $file){
	$file2 = $file;

    $parts = explode('/', $file);
    array_splice($parts ,0 , - count($parts) + 2);
    //$parts = end($parts);
    $file = implode('/', $parts);
    $file = str_replace('..', '', $file);
    $file = "./data/" . $file;
    $data = file_get_contents($file);

    $parts2 = explode('/', $file2);
    array_splice($parts2 ,0, count($parts2) - 1);
    $file2 = implode('/', $parts2);
    $file2 = str_replace('..', '', $file2);

    // rename data.csv and geojson 
    if (strstr($file, 'pop_choro_stacked')) {
        $file3 = 'pop_dens.csv';
    } else if (strstr($file, 'choro')) {
        $file3 = str_replace('_choro_stacked', '_pct', $file2);
    } else if (strstr($file, 'prop')) {
        $file3 = str_replace('_prop_stacked', '_nb', $file2);
    } else if (strstr($file, 'flow')) {
        $file3 = str_replace('_flow_stacked', '_nbNoResid', $file2);
    } else if (strstr($file, 'secteurs')) {
        $file3 = $city . '_secteurs.geojson';
    } else {
        $file3 = $file2;
    };

    $zip->addFile($file3, $data);
}*/

// add all files in unique folder.zip and rename files v4-2
foreach($filesArray as $file){
    $file2 = $file;

    $parts = explode('/', $file);
    array_splice($parts ,0 , - count($parts) + 2);
    $file = implode('/', $parts);
    $file = str_replace('..', '', $file);
    $file = "./data/" . $file;
    $data = file_get_contents($file);

    $parts2 = explode('/', $file2);
    array_splice($parts2 ,0, count($parts2) - 1);
    $file2 = implode('/', $parts2);
    $file2 = str_replace('..', '', $file2);

    // rename csv and geojson 
    if (strstr($file, 'csv') || strstr($file, 'geojson')) {
        $fileName = $city . "_" . $file2 ;
    } else {
        $fileName = $file2 ;
    }

    $zip->addFile($fileName, $data);
}

fclose($fp);

// finish the zip stream
$zip->finish();

?>
