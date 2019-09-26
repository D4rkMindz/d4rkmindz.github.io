# How to upgrade PHP on Windows XAMPP

Unlike on unix, there isn't a specific command to "just upgrade" an executable. This makes everything so much more difficult. 
But there is a way to upgrade your PHP version without copying your giant data folder (the one within the mysql directory of xampp).

### Download XAMPP

It begins with the download of the latest [XAMPP version](https://www.apachefriends.org/index.html). After that, install it in a directory (doesn't matter where). You only have to install `Apache` and `PHP`.
In my case, i have XAMPP installed in `C:\xampp`. My new version is installed in `C:\xampp2`. It's **important that you remember your directories**.
Please also shut down Apache and MySQL in your [XAMPP control-panel](https://i.stack.imgur.com/z95JC.png)

### Install PHP
I really recommend, that you make a backup of your PHP.ini file. This file is located in `C:\xampp\php\php.ini`. After making your backup, open the `C:\xampp2\php\php.ini` file, search and replace all occurences of `xampp2` with `xampp`.
After you've done that, you can delete the whole `C:\xampp\php` folder and replace it with the `C:\xampp2\php` folder.

### Install Apache
You have to do something similar to the PHP installation with Apache. Search and replace `xampp2` with `xampp` in the following files:

 * `C:\xampp\apache\conf\httpd.conf`
 * `C:\xampp\apache\conf\extra\httpd-xampp.conf`
 * `C:\xampp\apache\conf\extra\httpd-ssl.conf`

All files can be accessed via the control-panel of XAMPP. All you have to do is click on Apache's `Config` button and you will see all of them listed.

Then you can delete the whole `C:\xampp\apache` folder and replace it with the `C:\xampp2\apache` folder.

Now, everything should check out if you start Apache and MySQL from your XAMPP control-panel.

If not, open your Terminal (WINDOWS + R, Type `cmd`) and `cd C:\xampp\apache\bin`. Then execute `httpd.exe` by typing it into the terminal.
The error, why Apache won't start is displayed now below and you can google for it.

### Install XDebug for PHP

XDebug is one of the most installed PHP-Debuggers.
To install it, you can have a look at my Tutorial on [how to install XDebug](tutorials/php/install-xdebug.md).
