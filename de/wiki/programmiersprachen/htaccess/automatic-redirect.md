## Automatischer Redirect auf HTTPS
Wenn man eine SSL (HTTPS) Verbindung nutzen kann, sollte man das auch. Wenn man jeden Benutzer automatisch auf HTTPS umleiten möchte, kann man dies in einer .htaccess-Datei machen. Der Code dafür ist unten zu finden:
```
RewriteEngine On
RewriteCond %{HTTPS} !on
RewriteRule .* https://%{SERVER_NAME}%{REQUEST_URI} [R=301,L]
```