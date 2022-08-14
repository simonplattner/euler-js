import fibbonaciGenerator from "./modules/fibbonaci.mjs";
import stream from "./modules/stream.mjs";

async function main() {

  const sum = stream([1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89])
  // const sum = stream(fibbonaciGenerator)
    .takeWhile(s => s < 4000000)
    .filter(s => s % 2 === 0)
    .reduce((a, b) => a + b, 0);

  console.log(sum);
}

main();
