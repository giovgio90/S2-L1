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

// I principali datatype in JavaScript sono:

//Stringa: La stringa sembra una catena di lettere che puoi scrivere tra virgolette. Ad esempio, "cane" è una stringa.

//Numero: I numeri sono come i mattoncini Lego con cui puoi fare calcoli. Puoi sommare, sottrarre, moltiplicare o dividere i numeri.

//Booleano: Un booleano è come un interruttore che può essere acceso o spento. Può avere solo due valori: vero o falso.

//Array: Un array è come una scatola di mattoncini Lego in cui puoi mettere più cose. Puoi mettere numeri, stringhe o addirittura altri array all'interno.

//Oggetto: Un oggetto è come un sacco di mattoncini Lego che possono rappresentare qualcosa di specifico. Puoi mettere molte informazioni diverse all'interno di un oggetto, come il colore preferito o il numero di scarpe di una persona. Ogni informazione all'interno dell'oggetto ha un nome, proprio come i mattoncini Lego possono avere etichette.

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

const name = "Giovanni";

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
const num1 = 3;
const num2 = 8;
const sumTotal = num1 + num2;
console.log("ESERCIZIO 3: ", sumTotal);

/* ESERCIZIO 4
 Crea una variabile di nome "x" e assegna ad essa il numero 12.
*/

const x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

//const name = "Giordano";
//console.log("ESERCIZIO 5: ", name); // In console.log appare il seguente errore: Uncaught SyntaxError: Identifier 'name' has already been declared

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

const subtraction = 4 - x;
console.log("ESERCIZIO 8: ", subtraction);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

const name1 = "john";
const name2 = "John";

let numbers = name1 === name2;
console.log("ESERCIZIO 7: ", numbers);

let equalName = name1.toLowerCase() === name2.toLowerCase();
console.log("ESERCIZIO 7: ", equalName);
