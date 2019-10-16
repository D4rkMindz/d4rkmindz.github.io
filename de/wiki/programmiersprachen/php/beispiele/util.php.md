```php
<?php
   
   /**
    * File with main functions.
    *
    * @author Björn Pfoster
    */
   use Monolog
Logger;
   use Monolog
Handler
StreamHandler;
   
   /**
    * Shortening for htmlentities
    *
    * Encode all htmlentities from $text.
    *
    * @param string $text
    * @return string
    */
   function h($text)
   {
       return htmlentities($text, ENT_QUOTES, "UTF-8");
   }
   
   /**
    * Echo encoded $text
    *
    * @param string $text
    */
   function wh($text)
   {
       echo h($text);
   }
   
   /**
    * Check if blank
    * check if $value is empty and not numeric.
    *
    * @param string $value
    * @return bool true if $value is blank
    */
   function blank($value)
   {
       if (empty($value) && !is_numeric($value)) {
           $result = true;
       } else {
           $result = false;
       }
       return $result;
   }
   
   /**
    * Validate email
    *
    * This function is shortening for filter_var.
    *
    * @see filter_var()
    * @param string $email to check
    * @return mixed
    */
   function is_email($email)
   {
       return filter_var($email, FILTER_VALIDATE_EMAIL);
   }
   
   /**
    * Shortening for htmlspecialchars
    *
    * Encodes only special characters from html.
    *
    * @param string $str not encoded string
    * @return string encoded string
    */
   function ga($str)
   {
       return htmlspecialchars($str, ENT_QUOTES, "UTF-8");
   }
   
   /**
    * Echos encoded $str
    * @param string $str echoes encoded string
    */
   function wa($str)
   {
       echo ga($str);
   }
   
   /**
    * Create a connection to a database
    *   
    * @return PDO $database connection
    */
   function new_database($config)
   {
       $host = $config['db']['host'];
       $db = $config['db']['name'];
       $user = $config['db']['user'];
       $pass = $config['db']['password'];
       $char = $config['db']['charset'];
   
       $dsn = "mysql:host=$host;dbname=$db;charset=$char";
       $opt = [
           PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
           PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
           PDO::ATTR_EMULATE_PREPARES => false,
       ];
       $database = new PDO($dsn, $user, $pass, $opt);
       return $database;
   }
   
   /**
    * Write log
    *
    * If an exception was catched, this function will be executed.
    * The function writes the message in the error.log file.
    *
    * @param  string $message an error occured
    */
   function log_msg($message)
   {
       // create a log channel
       $log = new Logger('name');
       $log->pushHandler(new StreamHandler(_DIR_ . '/../tmp/logs/error.log', Logger::DEBUG));
   
       // add records to the log
       $log->error($message);
   
   }
   
   /**
    * Render file.
    *
    * @param string $file insert file (inkl. path)
    * @param array $array insert like ['name' => $name, 'name2' => $name2]
    * @return string with output buffering
    */
   function render($file, $array)
   {
       ob_start();
       extract($array);
       require $file;
       $result = ob_get_contents();
       ob_end_clean();
       return $result;
   }
   
   /**
    * Check, if user is logged in.
    *
    * @return bool true if user is logged in
    */
   function check_session($session)
   {
       if (!empty($session)) {
           return true;
       } else {
           return false;
       }
   }
   
   /**
    * Function reads the file.
    *
    * @param string $path path to file
    * @return mixed data from file
    */
   function read($path)
   {
       return require $path;
   }
 ```