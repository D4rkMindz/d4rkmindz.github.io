# Flash-Messages

Sogenannte "Flash-Messages" sind dazu da, um beispielsweise eine Erfolgsmeldung zu senden. Mit
  session()->getFlashBag->set('success', 'Erfolgreich');
wird "Erfolgreich" zum FlashBag hinzugefügt. Success ist dabei der Status
  success => grün
  primary => dunkelblau
  info    => hellblau
  warning => orange
  danger  => rot
Um die Erfolgsmeldung anzuzeigen muss man nur beim rendern des templates den Flash Wert mitgeben
```php
$viewData = [
  'flash' => session()->getFlashBag->all()
];
$this->render('template.html', $viewData);```
Um den mitgegebenen Wert im Template verwenden zu können, muss man in diesem an der Stelle, an welcher sich die Erfolgsmeldung(en) befinden soll(en), folgendes hinzufügen:
```php
<?php foreach($this->next('flash') as $type => $messages) : ?>
   <?php foreach($messages as $message) : ?>
       <div class="alert alert-<?= $type ?>" role="alert">
           <span class="help-block"><?= $message ?></span>
       </div>
   <?php endforeach; ?>
<?php endforeach; ?>```
In der Variable "$type" wird jeweils der Typ, also in diesem Fall 'success', gespeichert. In $message wird dementsprechend die Nachricht, also $viewData mit dem Inhalt "Erfolgreich", abgespeichert.
