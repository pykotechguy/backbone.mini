<?php
/**
 * print.php are responsible for output the contents of separate js files into one file
 */

Class PrintJs {

    public $files = array();
    public $config = array();


    function __construct( $options = array() ) {

        if ( isset( $options['files']) ) {
            $this->files = $options['files'];
        }
        if ( isset( $options['config']) ) {
            $this->config = $options['config'];
        }
    }

    /**
     * Output (Print out) all the contents of javascript files
     */
    public function output($js='') {
		$js .= $this->concat($this->files);

        if ($this->config['write_to_file']) {
            $f = $this->config['write_to_filename'];
            $content = '' . $js;
            file_put_contents($f, $content);
        }

		return $js;
	}

    /**
     * Take in file paths array as $files, read their contents, and append the contents to $js
     */
	public function concat($files=array(), $js='') {
        // make sure files array are not empty
		if ( !empty($files) ) {
			foreach ($files as $file) {
                // make sure take in only .js files
                if ( substr( $file, -3) == '.js') {
					$js .= $this->getFile($file);
				} else {
                    // if found a non .js file, append one line of comments into js.php
					$js .= "\n// " . $file . " is not a .js file, therefore its content is ignored. \n\n";
				}
			}
		}
		return $js;
	}

	public function getFile($file) {
		return ( is_file($file) ) ? file_get_contents( $file, true ) : '';
	}

    /**
     *
     */
    public static function printjs($jsFiles, $config) {

        $printJs = new PrintJs( array( 'files' => $jsFiles, 'config' => $config ) );
        $output = $printJs->output();

        return $output;
    }

}