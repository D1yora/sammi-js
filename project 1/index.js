"use strict";

const numberOfSeries = +prompt("Nehcta serial ko'rdingiz?", "");

const seriesDB = {
  count: numberOfSeries,
  series: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("Oxirgi marta ko'rgan serialingiz?"),
  b = prompt("Nechi baxo berasiz?"),
  c = prompt("Oxirgi marta ko'rgan serialingiz?"),
  d = prompt("Nechi baxo berasiz?");

seriesDB.series[a] = b;
seriesDB.series[c] = d;

console.log(seriesDB);
