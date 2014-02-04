<?php
header( 'Content-type: text/javascript; charset: utf-8' );

header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");

// turn off the error reporting of php, because some machine might print out warnings to our js.php
error_reporting(0);

// start combining files
require('start.php');


// use ?compile=true to minify source file with google closure compiler
if ($_REQUEST['compile'] == "true") {
    require('compile.php');
} else {
	echo PrintJs::printjs($jsFiles, $config);
}

