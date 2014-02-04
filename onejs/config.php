<?php
    clearstatcache();
/**
 *  Configurations for OneJs
 */


/**
 * 1. make sure $js_root is properly targeted at javascript root folder
 */
define('WEB_ROOT', dirname(dirname(__FILE__)));
$js_root = WEB_ROOT . '/js';



/**
 * 2. list all the file names or folder names you want OneJs to SKIP
 *      - by default OneJs skips: (so you don't have to exclude them manually)
 *          - system folders '.' and '..'
 *          - file '.DS_Store'
 */
$excludes = array(
    'archive',
    'min'
);

$dependencies = array(
	"/\/lib\/(?!plugin)(?=underscore|jquery)/",
	"/\/lib\/(?!plugin)(?!underscore|jquery)/",
	"/plugin/",
	"/appcore/",
	"/module\/.*\/model/",
	"/module\/.*\/collection/",
	"/module\/.*\/router/",
	"/module\/.*\/view/",
	"/module\/.*\/.*\.Controller.js/",
	"/app.js/"
);



/**
 * 3. Write to file?
 *      - if set to true, every time you request js.php it will write the result to the file you designate.
 *      - if you want to put the compiled javascript into js_root folder, don't forget to exclude it in step 2.
 */
$write_to_file = true;
$write_to_filename = '../script.js';



/**
 * 4. Want to Compress Source Codes?
 *      - it will read the content of $write_to_filename in step 3, and save compiled code to destination filename
 *      - please set up a destination for compiled code. default value is 'compiled.js' in js_root folder.
 *      - In step 3, $write_to_file must be TRUE to make it compile properly.
 *      - if you set $compiled_filename as same as $write_to_filename. You'll overwrite original file and get a compiled script in the same file.
 */
$compiled_filename = '../script.js';
$compilation_level = 2;
// 1 = remove white space only; 2 = simple optimization; 3 = advanced optimization;



/**
 * (!) Do Not Change codes below (!)
 *
 * Config Array for print.php to use
 */
$config = array(
    'write_to_file' => $write_to_file,
    'write_to_filename' => $write_to_filename
);