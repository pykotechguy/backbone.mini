<?php
$url = 'http://closure-compiler.appspot.com/compile';

$source = $compiled_filename; // $compiled_filename is defined in config.php
$js_code = file_get_contents($write_to_filename); // $write_to_filename is also defined in config.php

$compilation_mode = array(
    '1' => 'WHITESPACE_ONLY',
    '2' => 'SIMPLE_OPTIMIZATIONS',
    '3' => 'ADVANCED_OPTIMIZATIONS'
);


$data = array(
    'js_code' => $js_code,
    'compilation_level' => $compilation_mode[$compilation_level],
    'output_format' => 'text',
    'output_info' => 'compiled_code'
);

// use key 'http' even if you send the request to https://...
$options = array(
    'http' => array(
        'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
        'method'  => 'POST',
        'content' => http_build_query($data),
    ),
);
$context  = stream_context_create($options);

date_default_timezone_set('America/Los_Angeles');
$date = date('m/d/Y h:i:s a', time());

$result = "// " . $date . "\n";
$result .= file_get_contents($url, false, $context);

file_put_contents($source, $result);
echo $result;