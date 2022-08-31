import primeGenerator from "./modules/primeGenerator.mjs";
import stream from "../util/stream.mjs";

function main() {

  const prime = stream(primeGenerator())
    .skip(10000)
    .takeFirst();

  console.log(prime);
}

main();
