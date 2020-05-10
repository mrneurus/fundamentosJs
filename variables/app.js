/* variables en JS 

Dos formas de crear Variables :: 

- var
- let

*/

var nombreVar = 'Neurus'

// lo mandamos a consola ::
    console.log(nombreVar);

// En js las variables no pueden comenzar con numeros, ni con caracteres especiales


// En este caso el prompt crea un popup al inicio de la web para cargar datos(input)

let nombre = prompt('Cual es tu nombre')
let edad =  prompt('Cual es tu edad')


// Ejemplo de como injectar con inerHTML desde js capturando el id.
// En este ejemplo mostramos el input del pront 
 
document.getElementById('app').innerHTML=`${nombre} ${edad}`