## Login
```php
session_start();
session_regenerate_id(true);
require_once _DIR_ . '/../vendor/autoload.php';
require_once "../config/config.php";
require_once "../lib/util.php";

$default = [];
$errors = [];
$default['user'] = "";                  //HTML input vom User
$default['password'] = "";              //HTML input vom User
try {
    if ($_POST) {
       $data = array_replace_recursive($default, $_POST);
       if (!empty($data['user'])) {
           if (check_pass($data, $config)) {
                $_SESSION['logged_in'] = true;
                $_SESSION['username'] = $data['user'];
                header("Location: loggedin.php");
                exit;
            } else {
                $errors['login'] = "Invald user credentials";
            }
        }
    } else {
        session_destroy();
        $data = $default;
    }
} catch (Exception $ex) {
    log_msg($ex->getMessage());         //log_msg braucht monolog
    header("Location: error.php");
    exit;
}

require_once "login.html.php";

function check_pass($data, $config)
{
    $db = new_database($config);
    $stmt = $db->prepare("SELECT * FROM user WHERE name=:user");
    $stmt->execute(['user' => $data['user']]);
    $row = $stmt->fetch();
    if ($row['password'] == $data['password']) {
        return true;
    } else {
        return false;
    }
}
```
