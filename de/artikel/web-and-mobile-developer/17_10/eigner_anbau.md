## Eigener Anbau
[Wordpress](/artikel/ct-webdesign/2017/wordpress-und-seine-konkurrenten) ist ein [Content Management System](/wiki/cms), welches die Erweiterung durch Plugins unterstützt. Dazu muss man lediglich eine PHP-Datei in dem Verzeichnis ''<ProjectRoot>/wpcontent/plugins/<yourPluginName>'' ablegen und am Anfang der Datei einen [DocBlock](/wiki/programmiersprachen/php/docblock) erstellen. Dieser DocBlock muss wie folgt strukturiert sein:


```
<?php
/**
Plugin Name: {yourPluginName}
Description: {descriptionOfYourPlugin}
Author: {yourName}
Version: 1.0.0
*/
```
Um dann einen Shortcut zu registrieren, welchen man im Template verwenden kann, muss man die funktion ''add_shortcode()'' mit dem gewünschten Shortcut name und einer Callback Funktion aufrufen.


```
<?php
add_shortcode('userip', function ($params){
  return $_SERVER['REMOTE_ADDR'];
});
```
Die Parameter in einem Wordpresstag erreicht man über ''$params''. Den Tag müsste man dann im Template wie folgt integrieren:


```
[userip foo='bar']
```
So würde man in params den Key "foo" mit dem Wert "bar" haben.



#### Widgets
Um ein Widget zu registrieren muss man zuerst auf den Hook 'widgets_init' ein Widget registrieren. Danach kann man mit der ''register_widget()'' Funktion das Widget registrieren.


```
<?php
/**
 * Plugin Name: Weather Widget
 * Description: Ein Widget zum Anzeigen des Wetters
 * Author: Björn Pfoster
 * Version: 1.0.0
 */

add_action("widgets_init", function () {
    register_widget("weatherWidget");
});

class weatherwidget extends WP_Widget
{
    public function __construct()
    {
        parent::__construct(
            "weatherwidget",
            "Wetter-Anzeige",
            ["description" => "Gibt aktuelles Wetter an einem Ort an"]
        );
    }

    public function widget($args, $instance)
    {
        $url = "http://api.openweathermap.org/data/2.5/weather?";
        $url .= "q={$instance['city']}&appid={$instance['appid']}&units=metric&lang=de";
        $response = wp_remote_get($url, $args);
        if (is_wp_error($response) || wp_remote_retrieve_response_code($response) != 200) {
            $answer = "Sorry, Daten konnten nicht geladen werden.";
        } else {
            $wetter = json_decode(wp_remote_retrieve_body($response));
            $iconUrl = "http://openweathermap.org/img/w/{$wetter->weater[0]->icon}.png";
            $answer = "<img src='{$iconUrl}' style='float: left; padding-right: 8px'/>";
            $answer .= $wetter->weather[0]->description;
            $answer .= "<br> bei " . round($wetter->main->temp) . " °C<br>";
            $answer .= "in {$instance['city']}";
        }
        
        echo $args['before_widget'];
        echo $args['before_title'] . "Wetteranzeige" . $args['after_title'];
        echo $answer;
        echo $args['after_widget'];
    }

    public function form($instance)
    {
        // Backend form
        $city = isset($instance['city']) ? $instance['city'] : '';
        $appid = isset($instance['appid'])? $instance['appid']: '';
        // Form in admin backend
        $cityId = $this->get_field_id('city');
        $apiKeyId = $this->get_field_id('appid');
        ?>
        <p>
            <label for="<?= $cityId?>">Stadt:</label>
            <input type="text" class="widefat" id="<?= $cityId?>" name="<?= $cityId?>" value="<?= $city?>">
        </p>
        <p>
            <label for="<?= $apiKeyId?>">API-Schlüssel:</label>
            <input type="text" class="widefat" id="<?= $apiKeyId?>" name="<?= $apiKeyId?>" value="<?= $appid?>">
        </p>
        <?php
    }

    public function update($newInstance, $oldInstance)
    {
        // validate updated values
        $instance = [];
        $instance['city'] = $newInstance? strip_tags($newInstance['city']): '';
        $instance['appid'] = $newInstance? trim($newInstance['appid']): '';
        return $instance;
    }
}
```

### Fazit
Ein Wordpressplugin ist sehr schnell erstellt. Dies kann für uns sehr gut sein, falls wir einmal eine Kleinigkeit bei einer Wordpresswebsite einfügen wollen.