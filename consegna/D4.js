/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

const area = function (l1, l2) {
  const calcolo = l1 * l2
  console.log(calcolo)
}

area(2, 4)

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

const crazySum = function (num1, num2) {
  const sum = num1 + num2
  if (num1 === num2) {
    return console.log(sum * 3)
  } else {
    return console.log(sum)
  }
}

crazySum(2, 2)

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

const crazyDiff = function (num3, num4 = 19) {
  const diff = Math.abs(num3 - num4)
  if (diff > 19) {
    return console.log(diff * 3)
  } else {
    return console.log(diff)
  }
}

crazyDiff(23) //23 - 19 = 4
crazyDiff(124) //(124 - 19) *3 = 315

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

const boundary = function (n) {
  if ((n > 19 && n <= 100) || n === 400) {
    return console.log(true)
  } else {
    return console.log(false)
  }
}

boundary(399) //false
boundary(10) //false
boundary(400) //true
boundary(50) //true

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

const epify = function (parola) {
  const word = "EPICODE"
  if (
    parola.slice(0, 7) === word
    // oppure si poteva usare anche
    //parola.startsWith(word)
  ) {
    return console.log(parola)
  } else {
    return console.log(word + parola)
  }
}

epify("EPICODE")
epify(" non è epicode ")

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

const check3and7 = function (number) {
  const multiplo3 = number % 3
  const multiplo7 = number % 7
  if (multiplo3 === 0 && multiplo7 === 0) {
    return console.log(number + " è divisibile per sia per 3 che per 7")
  } else if (multiplo3 === 0) {
    return console.log(number + " è divisibile per 3")
  } else if (multiplo7 === 0) {
    return console.log(number + " è divisibile per 7")
  } else {
    console.log(number + " non è divisibile ne per 3 ne per 7")
  }
}
check3and7(21)
check3and7(40)
check3and7(6)

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

const reverseString = function (parola) {
  //   const parolaAlContrario = parola.split("")
  //   parolaAlContrario.reverse()
  //   console.log(parolaAlContrario.join(""))
  const parolaAlContrario = parola.split("").reverse().join("")
  console.log(parolaAlContrario)
}

reverseString("Chiara")
reverseString("Anna")
reverseString("Harry Potter")

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

const upperFirst = function (frase) {
  const paroleFrase = frase.split(" ")
  for (i = 0; i < paroleFrase.length; i++) {
    paroleFrase[i] =
      paroleFrase[i].charAt(0).toUpperCase() + paroleFrase[i].slice(1)
  }
  return paroleFrase.join(" ")
}
console.log(upperFirst("ciao mi chiamo chiara"))

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
const cutString = function (stringa) {
  return console.log(stringa.substring(1, stringa.length - 1))
}

cutString("altalena")
cutString("polpetta")

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
