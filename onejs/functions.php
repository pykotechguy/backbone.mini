<?php
/**
 * scanFiles scans through all the directories under /js (JS_ROOT) and get the PATH of all valid .js files
 *
 * it returns a full array of JS file paths in order
 */
require_once('config.php');

// return all the dir path under js root, excludes certain files or folders if specified
function scanFiles($dir, $excludes) {
    $root = scandir($dir);
    $result = array();

    // $root is all the children under current folder
    foreach ($root as $value) {
        // ignore system files
        if ($value === '.' || $value === '..' || $value === '.DS_Store') {
            continue;
        }

        // file names or folders to be ignored from config.php
        foreach ($excludes as $name) {
            if ($value == $name) {
                continue 2;
            }
        }

        // call this function recursively to dig into deeper directories
        foreach (scanFiles("$dir/$value", $excludes) as $value) {
            $result[] = $value;
        }

        // if the path is direct to a file, store it into an array
        if (is_file("$dir/$value")) {
            $result[] = "$dir/$value";
        }
    }

    return $result;
}

function sortingFiles($files, $dep) {
    // $files has all dirs in it.
    // $dependencies is an array which contains the order of files you expect to be loaded first
    // $dependencies = $dep = ['lib', 'underscore', 'backbone', 'plugin', 'appcore', ...]
    
    // print_r($dep);
    
    $temp = [];
    foreach ($files as $file) {
        foreach ($dep as $d) {
            if (preg_match($d, $file, $matches)) {
                $temp[$d][] = $file;
            }
        }
    }

    // print_r($temp);

    $final = [];
    for ($i=0; $i<sizeof($dep); $i++) {
        $final = array_merge($final, $temp[$dep[$i]]);
    }

    return $final;
}