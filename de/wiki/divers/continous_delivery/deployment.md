## Deployment
Ein automatisches deployment lässt sich am einfachsten erreichen, wenn man [build.xml file](/http/**github.com/D4rkMindz/contact_form/blob/master/build.xml). Im der "name", welchen man im directory Tag definiert, wird gebraucht um über ANT das Script auszuführen. Wenn man also ein build.xml file hat, welches wie folgt aussieht, braucht man den unten dargestellten Aufruf.
```xml
<?xml version="1.0" encoding="UTF-8"?>
<project name="webapp" default="noop">
    <directory name="noop"/>
    <tstamp>
        <format property="timestamp" pattern="MM_dd_yyyy_HH-mm-ss" locale="de, DE"/>
    </tstamp>

    <!-- File variables-->
    <property name="filename" value="contact_form_${timestamp}.zip"/>
    <property name="build_dir" value="${basedir}/build"/>

    <!-- By default, we assume all tools to be on the $PATH -->
    <condition property="ext" value=".bat">
        <os family="windows"/>
    </condition>
    
    <directory name="deploy" description="get your Repository from GitHub to your build folder">
        <!-- Choose, which environment you want to deploy -->
        <input message="Which config should be used?"
               validArgs="test,staging,prod"
               addproperty="config"
        />
        <property file="${basedir}/config/ant.${config}.properties"/>

        <!-- Build project -->
        <antcall directory="build"/>

        <!-- Upload deploy.php -->
        <echo message="Uploading deploy.php ..."/>
        <scp file="${build_dir}/deploy.php"
        todir="${build.ftp.user}:${build.ftp.password}@${build.ftp.host}:${build.ftp.dir}"
        trust="true"/>

        <!-- Upload clean-up.php -->
        <echo message="uploading clean-up.php ..."/>
        <scp file="${build_dir}/clean-up.php"
        todir="${build.ftp.user}:${build.ftp.password}@${build.ftp.host}:${build.ftp.dir}"
        trust="true"/>

        <!-- Deleting clean-up.php and deploy.php -->
        <echo message="Deleting clean-up.php and deploy.php"/>
        <delete file="${build_dir}/clean-up.php" />
        <delete file="${build_dir}/deploy.php" />

        <!-- Upload zip-file -->
        <echo message="Uploading ${filename} ..."/>
        <scp file="${build_dir}/${filename}"
        todir="${build.ftp.user}:${build.ftp.password}@${build.ftp.host}:${build.ftp.dir}"
        trust="true"/>

        <!-- Delete old directories -->
        <delete dir="${build_dir}/master"/>
        <delete file="${build_dir}/master.zip"/>
        <delete file="${build_dir}/${filename}"/>


        <!-- Call deploy.php for zip-file -->
        <sshexec host="${build.ftp.host}"
                 username="${build.ftp.user}"
                 password="${build.ftp.password}"
                 command="cd ${build.ftp.dir};php deploy.php ${filename}"
                 usepty="true"
                 trust="true"
        />
    </directory>
</project>
```



Der Aufruf über ANT:
```
ant deploy
```



In diesem Beispiel wird das Script folgende Sachen ausführen:


   - Eine Abfrage, welche Umgebung man verwenden möchte und das laden der entsprechenden Datei


```xml
       <input message="Which config should be used?"
               validArgs="test,staging,prod"
               addproperty="config"
        />
        <property file="${basedir}/config/ant.${config}.properties"/>
```
   - Danach wird die build Funktion des ANT-Scripts aufgerufen und diese ausgeführt. Diese lädt ein ZIP-File des aktuellen Masters von GitHub herunter, entpackt dieses, entfernt alle überflüssigen Dateien und verpackt es wieder als ZIP-File. Ebenfalls wird das deploy und clean-up PHP-Script in den Build Ordner verschoben.
```xml
        <!-- Build project -->
        <antcall directory="build"/>
```
   - Jetzt wird das deploy.php und das clean-up.php Script auf den Server geladen. Die Zugangsdaten für den Server hat das ANT-Script aus der zuvor geladenen ant.${config}.properties Datei. Nach dem Upload der Scripts werden diese lokal wieder gelöscht.
```xml
        <!-- Upload deploy.php -->
        <echo message="Uploading deploy.php ..."/>
        <scp file="${build_dir}/deploy.php"
        todir="${build.ftp.user}:${build.ftp.password}@${build.ftp.host}:${build.ftp.dir}"
        trust="true"/>

        <!-- Upload clean-up.php -->
        <echo message="uploading clean-up.php ..."/>
        <scp file="${build_dir}/clean-up.php"
        todir="${build.ftp.user}:${build.ftp.password}@${build.ftp.host}:${build.ftp.dir}"
        trust="true"/>
        
        <!-- Deleting clean-up.php and deploy.php -->
        <echo message="Deleting clean-up.php and deploy.php"/>
        <delete file="${build_dir}/clean-up.php" />
        <delete file="${build_dir}/deploy.php" />
```
   - Nachdem die Scripts auf dem Server aktualisiert wurden, wird nun der Upload des in dem Build-Script erstellten ZIP-Files durchgeführt.
```xml
        <!-- Upload zip-file -->
        <echo message="Uploading ${filename} ..."/>
        <scp file="${build_dir}/${filename}"
        todir="${build.ftp.user}:${build.ftp.password}@${build.ftp.host}:${build.ftp.dir}"
        trust="true"/>
```
   - Wenn das ZIP-File auf dem Server ist, werden die überflüssigen, lokalen Dateien gelöscht und der Code in dem deploy.php Script ausgeführt.
```xml
        <!-- Delete old directories -->
        <delete dir="${build_dir}/master"/>
        <delete file="${build_dir}/master.zip"/>
        <delete file="${build_dir}/${filename}"/>


        <!-- Call deploy.php for zip-file -->
        <sshexec host="${build.ftp.host}"
                 username="${build.ftp.user}"
                 password="${build.ftp.password}"
                 command="cd ${build.ftp.dir};php deploy.php ${filename}"
                 usepty="true"
                 trust="true"
        />
```



Das ist alles, was in dem ANT-Script passiert. Jedoch wird in der deploy.php alles, was auf dem Server gemacht werden kann, ausgeführt. Das heisst, folgende Sachen erledigt das deploy PHP-Script:
  - release/ Ordner erstellen
  - Entpacken des ZIP-Files in den release/ Ordner
  - Den alten htdocs/ Ordner in htdocs_ZeitStempel/ umbenennen
  - release/ in htdocs/ umbennen
  - Das ZIP-File in ein backup/ Ordner verschieben
  - Angemessene Berechtigungen vergeben (könnte sonst Probleme mit der Webseite geben).
  - Anschliessend die Datenbank [Migration](/wiki/divers/database_migration) ausführen (mit Phinx)
  - Das clean-up PHP-Script starten, welches alte und unnötige Dateien löscht, respektive in entsprechende Ordner aufräumt.
