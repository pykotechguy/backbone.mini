<?php
clearstatcache();
/**
 *	Just like controllers in MVC frameworks,
 *  this controller helps handling different requests, and hand out desired results
 */
require('config.php');
require('functions.php');
require('print.php');


/**
 * @TODO: more smart file reading functions to support larger projects.
 */

// Generate an array of file paths that we want to compile into one file.
$jsFiles = scanFiles($js_root, $excludes);

// sort js files according to dependency defined by user
$jsFiles = sortingFiles($jsFiles, $dependencies);


// For debugging and see if all the files are included correctly
echo "/**\n";
print_r($jsFiles);
echo "*/\n\n\n";