/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort((a, b) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
});
console.log(pets);
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
pets.reverse((a, b) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
});
console.log(pets);
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
const fisrtelement = pets.shift();
pets.push(fisrtelement);
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

cars.forEach((car, index) => {
  car.licensePlate = `ABC${123 + index}`;
});

console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

const micra = {
  brand: "Nissan",
  model: "Micra",
  color: "Red",
  trims: ["trendline", "comfortline", "highline"],
};

cars.push(micra);

console.log(cars);

cars.forEach((car) => {
  car.trims.pop();
});

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

cars.forEach((car) => {
  justTrims.push(car.trims[0]);
});

console.log(justTrims);
/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

cars.forEach((car) => {
  if (car.color[0] === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
});

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/

const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

let i = 0;
while (numericArray[i] !== 32) {
  console.log(numericArray[i]);
  i++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];

const alphabet = [];

charactersArray.forEach((character) => {
  switch (character) {
    case "a":
      alphabet.push(1);
      break;
    case "b":
      alphabet.push(2);
      break;
    case "c":
      alphabet.push(3);
      break;
    case "d":
      alphabet.push(4);
      break;
    case "e":
      alphabet.push(5);
      break;
    case "f":
      alphabet.push(6);
      break;
    case "g":
      alphabet.push(7);
      break;
    case "h":
      alphabet.push(8);
      break;
    case "i":
      alphabet.push(9);
      break;
    case "l":
      alphabet.push(10);
      break;
    case "m":
      alphabet.push(11);
      break;
    case "n":
      alphabet.push(12);
      break;
    case "o":
      alphabet.push(13);
      break;
    case "p":
      alphabet.push(14);
      break;
    case "q":
      alphabet.push(15);
      break;
    case "r":
      alphabet.push(16);
      break;
    case "s":
      alphabet.push(17);
      break;
    case "t":
      alphabet.push(18);
      break;
    case "u":
      alphabet.push(19);
      break;
    case "v":
      alphabet.push(20);
      break;
    case "z":
      alphabet.push(21);
      break;
    default:
      alphabet.push(null);
  }
});
console.log(alphabet);
