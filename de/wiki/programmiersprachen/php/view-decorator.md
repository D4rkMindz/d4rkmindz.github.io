## View Decorator
Um ein Template gänzlich von jeder Logik (bsp.: Button-farbe aufgrund eines Statuses anzeigen) abzutrennen kann man einen View Decorator brauchen. Die Logik wird von der View in eine eigene Klasse verschoben.


```php
class UserProfileDecorator
{
   private $entity;

   public static function decorate($model)
   {
       return new self($model);
   }

   public function __construct($model)
   {
       $this->entity = $model;
   }

   public function __get($name)
   {
       $methodName = 'get' . $name;
       if (method_exists(self::class, $methodName)) {
           return $this->$methodName();
       } else {
           return $this->entity->{$name};
       }
   }

   public function __call($name, $arguments)
   {
       return $this->entity->$name($arguments);
   }

   public function getStatus()
   {
       if($this->entity->status == 
App
Models
User::STATUS_ONLINE) {
           return '<label class="text-primary">Online</label>';
       } else {
           return '<label class="text-danger">Offline</label>';
       }
   }

   public function getLastOnline()
   {
       return  date('F j, Y', strtotime($this->entity->lastOnline));
   }
}
```



Dieser Decorator wird dann in der Controllerklasse wie folgt verwendet:


```php
public function user (Request $request)
{
    $user = $this->userService->getUserById($request->id);
    $user = DTO::make($user);
    $user = UserProfileDecorator::decorate($user);
    return view('user.index', compact('user'));
}
```
Der Code welcher anzeigt, wie ein Button aussehen soll wir hier bereits in einer Funktion "vorgerendert" und anschliessend dann in der View in das Template eingefügt.