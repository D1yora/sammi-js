"use strict";

// const numberOfSeries = +prompt("Nehcta serial ko'rdingiz?", "");

// const seriesDB = {
//   count: numberOfSeries,
//   series: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// const a = prompt("Oxirgi marta ko'rgan serialingiz?")(
//   (b = prompt("Nechi baxo berasiz?"))
// )((c = prompt("Oxirgi marta ko'rgan serialingiz?")))(
//   (d = prompt("Nechi baxo berasiz?"))
// );

// seriesDB.series[a] = b;
// seriesDB.series[c] = d;

// console.log(seriesDB);

const color = "red";
switch (color) {
  case "red":
    console.log("stop");
    break;
  case "green":
    console.log("goo");
    break;
  case "yellow":
    console.log("slowly");
    break;
  default:
    console.log("traffic jam");
    break;
}

let startNum = 1;
while (startNum < 10) {
  console.log(startNum);
  startNum++;
}

do {
  console.log(startNum);
  startNum++;
} while (startNum <= 10);

for (let i = 1; i <= 8; i++) {
  if ((i = 8)) {
    break;
    continue; //tashlab o'tib ketadi
  }
  console.log(i);
}

let sum = 23.95;
let tip = "3";
console.log("The total is $" + sum + tip + ".");
