# Strings (Cadenas de texto) en JavaScript 

En JavaScript al igual que en la mayoria de los lenguajes , podemos usar cadenas de texto (Strings), para ello nos vamos a servir del uso de las comillas simples y dobles.

- Usando comillas simples : :

    ```javascript
    let comillaSimple = 'Cadena de Texto'
    ``` 

- Usando comillas dobles : :
 
    ```javascript
    let comillaDimple = "Cadena de Texto"
    ```
- En casos donde necesitemos usar comillas dentro de la cadena, ya sea para resaltar o itar : :

    ```javascript
    let citaSimple = "Cadena de Texto con 'una cita' "
    ```

  ```javascript
    let citaDoble = 'Cadena de Texto con "una cita" '
    ```
- **Escapar las comillas** ,  en caso de no querer intercalar las comillas, se puede escapar las mismas usando las barras : 

  ```javascript
    let escapando = 'Cadena de Texto  \'soy una cita escapada\' '
    ``` 

- **Concatenar Strings**
    
    - Usando el simbolo mas + 
        ```javascript
        let concatConMas = 'Somos'+ 'una'+'union'
        ```
    - Usando templates literarls

        ```javascript
        let tempLiteralsA  = 'Template'
        let tempLiteralsB  = 'Literals'
        console.log(`${tempLiteralsA } ${tempLiteralsB}`)

        ```


## Strings y sus funciones : : 

En JS, ya contamos por defecto con varias funciones para poder manipular los Strings , a continuacion los mas utilizados. 

- length : Nos permite obtener la cantidad de caracteres o largo de la cadena, incluyendo los espacios.
     ```javascript
        let funcionLargo = 'largo'
        console.log(funcionLargo.length) 
    ```

- concat : Nos permite concatenar
     ```javascript
        let funcionUnion = 'union'
        console.log(funcionUnion.concat(' ' 'me concatene')) 
    ```
- toUpperCase : Nos permite pasar a mayuculas una cadena
     ```javascript
        let funcionMayuscula = 'mayuscula'
        console.log(funcionMayuscula.toUpperCase() ) 
    ```

- indexOf : Nos permite buscar dentro de una cadena de texto.Nos devuelve la posicion de lo cadena que buscamos dentro de toda la cadena que lo contiene.Si devuelve -1, significa que el elemento no existe.
     ```javascript
        let funcionBusqueda = 'JavaScript elementoJS'
        console.log(funcionBusqueda.indexOf('elementoJS')) 
    ```

- substrings : Nos permite recortar o substraer una parte de la cadena.
     ```javascript
        let funcionExtraer = 'JavaScript elementoJS'
        console.log(funcionExtraer.substring(3,11)) 
    ```
- slice : Nos permite recortar o substraer desde el final de la cadena.
     ```javascript
        let funcionFinal = 'JavaScript elementoJS'
        console.log(funcionFInal.slice(-10)) 
    ```

- split : Nos permite atomizar la cadena.
     ```javascript
        let funcionAtomica = 'JavaScript elementoJS'
        console.log(funcionAtomica.split(', ')) 
    ```
- replace : Nos permite buscar y remplazar en una cadena.
     ```javascript
        let funcionReemplazo = 'JavaScript elementoJS'
        console.log(funcionAtomica.replace('JavaScript','JS')) 
    ```

- includes : busca en una cadena, y si encuentra el valor buscado, devuelve true.
     ```javascript
        let funcionIncluido = 'JavaScript elementoJS'
        console.log(funcionIncluido.includes('JavaScript')) 
    ```

