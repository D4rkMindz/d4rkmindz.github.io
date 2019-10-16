## Data Transfer Object
Ein DTO ist ein immutable (unveränderbares) Objekt. Diese repräsentieren Daten. Sie haben auch keine setter Methoden. Daten werden einmal über den Konstruktor eingefügt. Ein Beispiel für ein DTO ist folgender Code:


```php
class DTO
{
    private $entity;

    public static function make($model)
    {
        return new self($model);
    }
 
    public function __construct($model)
    {
        $this->entity = (object) $model->toArray();
    }

    public function __get($name)
    {
        return $this->entity->{$name};
    }
}
```
Ein solches DTO wird dann wie folgt verwendet:


```php
public function user (Request $request)
{
    $user = $this->userService->getUserById($request->id);
    $user = DTO::make($user);
    return view('user.index', compact('user'));
}
```