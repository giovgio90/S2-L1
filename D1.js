/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output collega questo file al tuo HTML e apri la console del browser. 
- Dovrai creare una direttiva di output per testare le variabili od i risultati delle espressioni che crei
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
const title = "I principali datatype in JavaScript sono:";
const string = "Il dato stringa: sequenza di caratteri racchiusi tra gli apici;";
const number = "Il dato Numerico: rappresenta i numeri, sia interi che decimali;";
const boolean =
  "Il dato Booleano: rappresenta un valore di verità, che può essere vero o falso. Utilizzati per prendere decisioni o per valutare condizioni in base alla loro veridicità.";

console.log(title + "\n" + string + "\n" + number + "\n" + boolean);

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

const name = "Giovanni";

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

const myNumber = 12;
const yourNumber = 20;

console.log("La somma tra 12 e 20 è:", myNumber + yourNumber);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

const x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

// const name = "Giordano"; //   In questo caso appare il seguente errore su Console: Uncaught SyntaxError: Identifier 'name' has already been declared
// console.log(name); //

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

console.log(4 - x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

const name1 = "john";
const name2 = "John";

const lowerCase = name1.toLowerCase() === name2.toLowerCase();

console.log(name1 === name2);
console.log(lowerCase);
