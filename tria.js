const readlineSync = require("readline-sync"); //aquesta llibreria "readline-sync" permet preguntar coses a l'usuari

historia = [
  { index: 0, text: "Funciona", s: 5, n: 1, fi: false },
  { index: 1, text: "¿Lo has tocado", s: 6, n: 2, fi: false },
  { index: 2, text: "¿Nos dará problemas?", s: 3, n: 9, fi: false },
  { index: 3, text: "La has cagado", s: 4, n: 3, fi: false },
  { index: 4, text: "¿Puedes culpar a otro?", s: 10, n: 3, fi: false },
  { index: 5, text: "No lo toques", s: 10, n: 10, fi: false },
  { index: 6, text: "¡Burro!", s: 7, n: 7, fi: false },
  { index: 7, text: "¿Alguien lo sabe?", s: 3, n: 8, fi: false },
  { index: 8, text: "¡Escóndelo!", s: 10, n: 10, fi: false },
  { index: 9, text: "¡Lánzalo!", s: 10, n: 10, fi: false },
  { index: 10, text: "Sin problemas", s: 10, n: 10, fi: true },
];

let nom = readlineSync.question("Com et dius? ");
console.log("Hola " + nom + ", comencem!");

let index = 0;
while (index >= 0) {
  let pagina = historia[index];
  console.log(pagina.text);
  if (pagina.fi) {
    index = -1;
  } else {
    if (pregunta()) {
      index = pagina.si;
    } else index = pagina.no;
  }
}

function pregunta() {
  let resposta = "";
  resposta = readlineSync.question(`Si o no? [s/n]`);
  while (!respostaValida(resposta)) {
    resposta = readlineSync.question(`Si o no? [s/n]`);
  }
  if (resposta === "s") {
    return true;
  } else {
    return false;
  }
}

function respostaValida(r) {
  if (r.toLowerCase() === "s" || r.toLowerCase(r) === "n") {
    return true;
  } else {
    return false;
  }
}
