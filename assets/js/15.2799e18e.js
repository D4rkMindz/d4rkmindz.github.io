(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{244:function(e,t,a){"use strict";a.r(t);var n=a(4),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"how-to-install-xdebug"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-install-xdebug","aria-hidden":"true"}},[e._v("#")]),e._v(" How to install XDebug")]),e._v(" "),a("p",[e._v("XDebug is the most used PHP debugger.\nPHPStorm, VSCode, Eclipse and other IDEs integrate perfectly with it.\nThe creator of XDebug "),a("a",{attrs:{href:"https://github.com/derickr",target:"_blank",rel:"noopener noreferrer"}},[e._v("Derick Rethans"),a("OutboundLink")],1),e._v(" (leave a ⭐) makes the installation easier for us. Previously, you had to decide which version to download based on the PHP version, processor architecture, and other factors. Today it all works much easier.")]),e._v(" "),a("h3",{attrs:{id:"windows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows","aria-hidden":"true"}},[e._v("#")]),e._v(" Windows")]),e._v(" "),a("p",[e._v("First, make sure Apache is not running in your "),a("a",{attrs:{href:"https://i.stack.imgur.com/z95JC.png",target:"_blank",rel:"noopener noreferrer"}},[e._v("XAMPP control-panel"),a("OutboundLink")],1),e._v(".\nIn order to install XDebug on Windows, you need to set the configuration of PHP to a file. To do this, open the terminal (WINDOWS + R, type "),a("code",[e._v("cmd")]),e._v(") and navigate to your desktop using and output the PHP configuration to a file.")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" C:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Users"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your-username"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("Desktop\nphp -i "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" phpinfo.txt\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("The "),a("code",[e._v("phpinfo.txt")]),e._v(" file is now on your desktop. You open it with an editor that you can copy the content.")]),e._v(" "),a("p",[e._v("Then go to "),a("a",{attrs:{href:"https://xdebug.org/wizard",target:"_blank",rel:"noopener noreferrer"}},[e._v("the XDebug Wizard"),a("OutboundLink")],1),e._v(" and paste the text there.\nXDebug will automatically provide you with the correct "),a("code",[e._v(".dll")]),e._v(" file.\nDownload this file and move it to the "),a("code",[e._v("C:\\xampp\\php\\ext")]),e._v(" folder.")]),e._v(" "),a("p",[e._v("Then you need to add XDebug to the PHP configuration file "),a("code",[e._v("php.ini")]),e._v(" as a debugger extension. The "),a("code",[e._v("php.ini")]),e._v(" file is located at "),a("code",[e._v("C:\\xampp\\php\\php.ini")]),e._v(". Open it with an editor and add the following lines at the top:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("zend_extension = C:\\xampp\\php\\ext\\<the-name-of-the-dll-you-just-downloaded>.dll\nxdebug.remote_enable = 1\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("To check if XDebug really works, I recommend that you create a file to output the PHP configuration in your Webroot.")]),e._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[e._v("<?php")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// C:\\xampp\\htdocs\\info.php")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("echo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("phpinfo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("Now start Apache from your XAMPP control-panel and visit "),a("a",{attrs:{href:"http://localhost/info.php",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("http://localhost/info.php")]),a("OutboundLink")],1),e._v(" in your browser.")])])}),[],!1,null,null,null);t.default=s.exports}}]);