const _ = require('lodash');

const fibbonaci = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

const sum = _.chain(fibbonaci)
  .takeWhile(s => s < 4000000)
  .filter(s => s % 2 === 0)
  .sum()
  .value();

console.log(sum);
