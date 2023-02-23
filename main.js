
//Crea una función resta que espere dos parámetros a y b y que devuelva la resta de los mismos.

function resta(a, b) {
    c = a - b
    return c
}
console.log(resta(5, 4))

//Crea un programa el cual te pregunte por una nota del 0 al 10 y dependiendo del número, te devuelva la //Siguiente claSificación.
// Nota: Debes de usar el Switch.
// 0 - 4: Insuficiente.
// 5 - 6: Suficiente.
// 7 - 8: Notable.
// 9 - 10: Sobresaliente.

// resultado = (igual aun console.log en un switch) 

function val() {
    let nota = prompt('Introduce numero')
    nota = +nota
    switch (true) {
        case nota < 5:
            console.log('Insuficiente')
            break;
        case (nota >= 5 && nota <= 6):
            console.log('Suficiente')
            break;
        case nota >= 7 && nota <= 8:
            console.log('Notable')
            break;
        case nota >= 9 && nota <= 10:
            console.log('Sobresaliente')
            break;

        default:
            break;
    }
    return
}
//val()

//Crea la función duplicaNumero debe recibir un tipo number y devolver el doble del valor recibido. //Si la función no recibe un dato tipo number debe devolver el string ‘Debo ser ejecutada con un número’

function dupNum(a) {
    if (typeof a === 'number') {
        a = a * 2
        return a
    } else {
        return 'Debo ser ejecutada con un número'
    }

}
console.log(dupNum(7))
//Crea la función caracterInicial  debe recibir un tipo string y devolver un string con el primer carácter.
//Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.
//Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'

function caractInic(a) {
    if (typeof a === 'string' && a.length <= 0) {
        console.log('Debo ser ejecutada con un string no vacío')
    } else if (typeof a === 'string') {
        console.log(a[0])
    } else {
        console.log('Debo ser ejecutada con un string')
    }
    return
}

caractInic('')

//Crea la función ultimoCaracter debe recibir un tipo string y devolver un string con el último carácter.
//Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.
//Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'

function ultimoCaracter(a) {
    if (typeof a === 'string' && a.length <= 0) {
        console.log('Debo ser ejecutada con un string no vacío')
    } else if (typeof a === 'string') {
        console.log(a.substring(a.length - 1, a.length))
    } else {
        console.log('Debo ser ejecutada con un string')
    }
    return
}

ultimoCaracter('Lo encontre')

//Crea la función cuentaCaracteres debe recibir un tipo string y devolver un number con el número de carácteres
//Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'

function cuentaCaracteres(a) {
    if (typeof a == 'string') {
        return console.log(a.length)
    } else {
        return console.log('Debo ser ejecutada con un string')
    }

}
cuentaCaracteres('agskjagfajgf')

//Un palíndromo es una palabra que se escribe igual del derecho que del revés por ejemplo orejero, rallar o somos.  //Crea la función esPalindromo que recibirá una cadena de texto y deberá devolver //Si es un palíndromo o no.
//Si la función no recibe una cadena de texto o está vacía 'no es un formato correcto'

function esPalindromo(a) {
    if (typeof a === 'string') {
        let strInv = a.split('')
        strInv = strInv.reverse()
        strInv = strInv.join('')
        if (typeof a !== 'string' || a === '') {
            return 'No es un formato correcto'
        } else if (a === strInv) {
            return 'Es una palabra palindroma'
        } else {
            return 'No es una palabra palindroma'
        }
    }
}

console.log(esPalindromo('kayak'))

//Crea la función getPrecioMostrar para que devuelva una cadena de texto con formato precio con dos decimales. Para 2 debería devolver 2.00 €.
//Si la función no recibe un número debería devolver devolver 'no es un formato correcto'

function getPrecioMostrar(n) {
    if (typeof n === 'number') {
        n = n.toFixed(2)
          return console.log(n.toString())
    } else if (n !== 'numbere'){
         return console.log('no es un formato correcto')
      } 
    else {
       
     }
    }
    
getPrecioMostrar(2)

//Crea la función diviSion que acepte como argumento dos números y devuelva el resultado de su diviSión

function diviSion(a, b) {
    c = a/b
    return console.log(c)
}

diviSion(15,3)

//Crea una función que dada una array de números, devuelve una nueva array que tenga solo los números que son 5 o más. Ejemplo entrada [3, 6, 8, 2] salida [6, 8]

let arrr = [3, 6, 8, 2, 15, 27, 30] 

function dex(arr) {
    return console.log(arr.filter(x => x >= 5))    
}

dex(arrr)

//Crea una aplicación que nos pida un número por prompt y con un método se lo pasamos por parámetro para que nos indique //Si es o no un número primo, debe devolver true //Si es primo //Sino false.
//Un número primo es aquel que solo puede dividirse entre 1 y sí mismo. Por ejemplo: 25 no es primo, ya que 25 es divi//Sible entre 5, //Sin embargo, 17 Si es primo.

function isPrime () {
    let str = prompt('Tell me an integer: ')
    let num = parseInt(str)
    for (let i = 2; i <= Math.ceil(num / 2); i++){
        if (num % i === 0) {
            return false
        }
    }
    return true
}

//console.log(isPrime())