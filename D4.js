/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

function area(num1, num2){
    let calcArea= num1 * num2
    return calcArea
}

console.log('area del rettangolo:', area(11, 12))

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(val1, val2){
    let result= 0
        if(val1 !== val2 && Number.isInteger(val1) && Number.isInteger(val2)){ 
            result += val1 + val2
        }else{
           result += (val1 + val2) * 3
        }
    return result
}

console.log('risultato somma:', crazySum(15, 23.5))

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(a, b=19){
    let result = 0
        if(a <= b){
            result += Math.abs(a - b)
        }else{
            result += Math.abs(a - b) * 3
        }
    return result
}

console.log('risultato differenza:', crazyDiff(32))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n){
    let result
    if(Number.isInteger(n) && n > 20 && n <= 100){
       result = true
    }else if(Number.isInteger(n) && n === 400){
       result = true
    }else{
        result = false
    }
    return result
}

console.log(boundary(380))

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(myString){
    let newString = ''
    if(myString.slice(0,7) !== 'EPICODE'){
        newString = 'EPICODE' + ' ' + myString
    }else{
        console.log(myString)
    }
    return newString
}

console.log(epify('Ciao come va?'))

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(x){
    if(x > 0 && x % 3 === 0 && x % 7 === 0){
        console.log('Il numero', x ,'è un multiplo di 3 e 7')
    }
    else if(x > 0 && x % 3 === 0){
        console.log('Il numero', x ,'è un multiplo di 3')
    }else if(x > 0 && x % 7 === 0){
        console.log('Il numero', x ,'è un multiplo di 7')
    }else{
        console.log('Il numero', x ,'non è un multiplo di 3 o 7')
    }
}

check3and7(9)

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(stringToReverse){
    return stringToReverse.split('').reverse().join('')
}

console.log(reverseString('Ciao come va?'))

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(initialString){
    let worlds = initialString.split(' ')
    for(let i = 0; i < worlds.length; i++){
        worlds[i]= worlds[i].toLowerCase()
        worlds[i]= worlds[i].charAt(0).toUpperCase() + worlds[i].slice(1,worlds[i].length)
    }
    return worlds.join(' ')
}

console.log(upperFirst('riscriviamo questa stringa'))

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(miaStringa){
    let arr = miaStringa.split('')
    arr.pop()
    arr.shift()
    return arr.join('')
}

console.log(cutString('stringa di prova'))

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n){
    let arr = []
    for(let i = 0; i < n; i++){
        arr.push(Math.random()*10)
    }
    return arr
}

console.log(giveMeRandom(4))
