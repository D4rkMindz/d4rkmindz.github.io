## Native Apps mit React Native
[React](https://reactjs.org/) ist eine Library zum erstellen von Webapplikationen, welche von Facebook entwickelt wird. Eine Lösung zur Entwicklung nativer Applikationen wird ebenfalls unter [React Native](https://facebook.github.io/react-native/) zur Verfügung gestellt. Ein React Native Applikation erzeugt anders als andere Cross Platform Development Frameworks, eine native Applikation. Dies bringt einen enormen Geschwindigkeitsvorteil im Vergleich zu Applikationen, welche in einem  WebView wie [Apache Cordova](https://cordova.apache.org/) laufen. 


Eine React Native Applikation lässt sich sehr schnell mit ''create-react-native-app'' initialisieren. Man muss sich jedoch bewusst sein, dass diese CLI Applikation eine Community Library ist und nicht von Facebook selbst ist. Mit dem befehl ''create-react-native-app todo'' wird eine Applikation namens "todo" erstellt. Dabei ist der Einstiegspunkt der Applikation in der Datei index.js.


Damit man die Applikation testen kann steht unter MacOS ein iOS Simulator und auf jedem System ein Android Simulator zur Verfügung ([Android Studio Simulator](https://developer.android.com/studio/run/emulator.html)). In diesem wird dann die Applikation mittels ''yarn run <ios|android>'' auf dem ensprechenden Simulator ausgeführt.


Um Veränderungen in der Applikation direkt Nachzuverfolgen gibt es eine Live Reload Funktion, welche man aktivieren muss.


Da React Native den Code über einen eigenen Renderer verarbeitet, kann man auch kein HTML schreiben. Man muss auf die Komponenten von React selber zurückgreifen. Um den Text "Hello World" auszugeben braucht es also folgenden Code:
```javascript
import React from 'react';
import { Text, View } from 'react-native';

export default() => {
  return (<View><Text>Hello World</Text></View>);
}
```
### Styling
React Native ist nicht in der Lage, normales CSS zu rendern. Deshalb muss man das CSS von React verwenden (die StyleSheet Komponente).
```javascript
import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import TodoListItem from './todo-ist-item.component';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});

export default class TodoList extends Component {
  constructor() {
    this.state = {
      todos:[ ... ],
    };
  }
  
  render() {
    return (
      <ScrollView style={styles.container}>
        {this.state.todos.map(todo=>{
          <TodoListItem key ={todo.title} todo={todo} />
        })}
      </ScrollView>
    );
  }
}
```
### Events
React Native stellt für eine möglichst einfache Benutzerinteraktion diverse Touchevents zur Verfügung. Ein typisches Beispiel ist ein Button, welchen man anklickt. Eine Aktion lässt sich durch das ''onPress'' Attribut der Komponente auslösen.


Der Button ist jedoch ziemlich eingeschränkt was die visuelle Interaktion anbelangt. Wenn man das berührte Element "erleuchten" lassen will, dann muss man die ''TouchableHighlight'' anstelle der ''Button'' Komponente verwenden. Um das Element durchsichtig zu machen gibt es die ''TouchableOpacity'' Komponente. Um gar keine Interaktion zu haben gibt es die ''TouchableWithoutFeedback'' Komponente.


Neben diesen genannten Komponenten gibt es noch viele weitere Komponenten, welche verschieden Interaktionsevents auslösen.


Dank einer wachsenden Community gibt es inzwischen auch Inoffizielle Komponenten wie die ** Komponente. Integriert werden diese Komponenten ganz einfach mittels [Node Package Manager (npm)](https://www.npmjs.com/).


### Verbindung mit einem Server
Eine Abfrage auf einen Server ist in React Native sehr einfach gestaltet. Man hat die ''fetch(url)'' Methode, welche ein Promise retourniert.


```javascript
async componentDidMount() {
  const todos = await this.getTodos();
  
  this.setState(() => {
    todos: todos,
  });
}

async getTodos() {
  try {
    const response = await fetch('http://localhost/todos/list');
    const responseJSON = await response.json();
    return responseJSON;
  } catch(e) {
    console.log('Error', e)
  }
}
```
### Navigation
Es gibt mehrere React Native Navigator. Die [React Navigation](https://reactnavigation.org), [React Native Naviagation (Wix)](/de/http/**github/wix/react-native-navigation) sind die bekanntesten Navigationen. In dem Beispiel unterhalb wird React Navigation verwendet.


```javascript
import {StackNavigator} from 'react-native-navigation';
import TodoList from './src/todo-list.component';
import Form from './src/form.component';

export default StackNavigator(
  {
    List: {screen: TodoList},
    Form: {screen: Form},
  },
  { initialRouteName: 'List' },
);
```
Die Navigation wird dann wie folgt auf einen Button angewandt.
```javascript
<View>
  <Button title="Go to Form" onPress={() => this.props.navigation.navigate('Form')} />
</View>
```
### Fazit
Grundsätzlich ist React Native eine gute Sache. Elemente werden erst gerendert, wenn diese benötigt werden. Ebenfalls ist React Native schneller als seine Konkurrenten, da der Code nicht in einer WebView, sondern auf nativer Basis gerendert wird.


Was ich jedoch als riesigen Nachteil betrachte ist der Mangel an mitgelieferten Komponenten. Nicht einmal ein vernünftiger Navigator wird mitgeliefert. Auch die Dokumentation ist eher schlecht gestaltet. Wenn man nicht bereits aus dem React Bereich kommt, denke ich, dass sich ein Umstieg auf React Native nicht lohnt. Alternativen sind wahrscheinlich um einiges besser (aktuell, Jan 2018).


