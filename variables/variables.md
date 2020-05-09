# Fundamentos JavaScript : : 

## Variables en Js : :
En **js** tenemos tres tipos de *variables* : 

- var :

```javascript
var nombre = 'JUAN'
```

- let :

```javascript
let nombre = 'JUAN'
```
- conts :

```javascript
const nombre = 'JUAN'
```

### Diferencias entre *var* y *let* : :

"¿Por qué necesitamos dos palabras clave para definir las variables? ¿Por qué tener ***var*** y ***let*** ?".

Las razones son un tanto históricas. Cuando Javascript fue creado, sólo existía ***var***. Esto funciona bien en la mayoría de los casos, pero tiene algunos problemas en cómo funciona — su diseño a veces puede ser confuso o molesto. Por eso, se creó ***let*** en versiones modernas de JavaScript, una nueva palabra clave que funciona de forma diferente a ***var***, solucionando sus problemas.

Comportamientos de **var** y **let** : :

*Puedes declarar una variable con var después de inicializarla y seguirá funcionando.* : 

```javascript

nombre = 'juan';

function logName() {
  console.log(nombre;
}

logName();

var nombre;
```

Si  cambiáramos *var* por *let* , nos daría un error. Esto es algo bueno — declarar una variable después de inicializarla hace que el código sea confuso y más difícil de entender.   

```javascript
let nombre = 'juan';
let nombre = 'Pedro';
```
Este ejemplo de let, daria ***error***

Se deberia usar de la siguiente forma : 

```javascript
let nombre = 'juan';
nombre = 'Pedro';
```

> No hay ninguna razón para usar var, a menos que necesites soportar versiones antiguas de Internet Explorer en tu código (no soporta let hasta la versión 11; el navegador Windows Edge soporta let a la perfección).

## Reglas para asignar nombres a las variables

Puedes nombrar a una variable casi como quieras, pero hay limitaciones. Generalmente debes limitarte a usar solo caracteres latinos (0-9, a-z, A-Z) y el "caracter subrayado" ( también llamado guión bajo  " _  ").

- No use el guión bajo al inicio del nombre de una variable — esto se usa en ciertos constructores de Javascript.

- No use números al incio del nombre de una variable. No está permitido y causará un error.

- Una buena práctica a seguir es usar la convención *"lower camel case"*, donde se unen varias palabras, usando minúsculas para la primera y luego capitalizar las siguientes.

    ```javascript
    let lowerCamelCase;
    ```
- Haga los nombres de las variables intuitivas, de manera que describan los datos que contienen.

- Las variables son case sensitive — eso quiere decir que myedad es una variable diferente de myEdad.

- No se debe usar palabras reservadas para nombrar variables — con esto, nos referimos a las palabras que conforman la sintaxis de Javascript. Por lo tanto no puede usar palabras como ***var**, ***function***, ***let***, y ***for*** para nombrar variables, ya que generará errores.