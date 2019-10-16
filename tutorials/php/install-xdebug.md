# How to install XDebug

XDebug is the most used PHP debugger.
PHPStorm, VSCode, Eclipse and other IDEs integrate perfectly with it.
The creator of XDebug [Derick Rethans](https://github.com/derickr) (leave a ⭐) makes the installation easier for us. Previously, you had to decide which version to download based on the PHP version, processor architecture, and other factors. Today it all works much easier.

### Windows

First, make sure Apache is not running in your [XAMPP control-panel](https://i.stack.imgur.com/z95JC.png).
In order to install XDebug on Windows, you need to set the configuration of PHP to a file. To do this, open the terminal (WINDOWS + R, type `cmd`) and navigate to your desktop using and output the PHP configuration to a file.

[asdf](/summaries/phpmagazin/2019/june/column.md)

```bash
cd C:\Users\<your-username>\Desktop
php -i > phpinfo.txt
```

The `phpinfo.txt` file is now on your desktop. You open it with an editor that you can copy the content.

Then go to [the XDebug Wizard](https://xdebug.org/wizard) and paste the text there.
XDebug will automatically provide you with the correct `.dll` file.
Download this file and move it to the `C:\xampp\php\ext` folder. 

Then you need to add XDebug to the PHP configuration file `php.ini` as a debugger extension. The `php.ini` file is located at `C:\xampp\php\php.ini`. Open it with an editor and add the following lines at the top:
```
zend_extension = C:\xampp\php\ext\<the-name-of-the-dll-you-just-downloaded>.dll
xdebug.remote_enable = 1
```

To check if XDebug really works, I recommend that you create a file to output the PHP configuration in your Webroot.
```php
<?php
// C:\xampp\htdocs\info.php
echo phpinfo();
```

Now start Apache from your XAMPP control-panel and visit [`http://localhost/info.php`](http://localhost/info.php) in your browser.
