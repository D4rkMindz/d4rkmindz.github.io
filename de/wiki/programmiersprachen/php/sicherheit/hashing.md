## Hashing
Beim Passwort-hashing geht es darum, dass man seine Passwörter in der Datenbank verschlüsselt. Dies macht man damit, falls jemand aussenstehendes Zugriff auf die Datenbank erhält, diese Person nicht die Passwörter lesen kann. In PHP kann man seit PHP 5.5 die integrierten Funktionen nutzen:


```php
<?php
//Check Password
//db() = function for database connection
$passwordFromDb = db()->getPassword();
if (password_verify($_POST['password'], $passwordFromDb)){
    //Password valid
} else {
    //Password invalid
}

//Insert Password into DB
$password = password_hash($_POST['password'], PASSWORD_DEFAULT);
```   
