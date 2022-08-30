function main() {
  let number = 600851475143;
  const sqrt = Math.floor(Math.sqrt(number));
  let lastFactor = 1;
  while (number > 1) {
    for (let i = 2; i < sqrt; i++) {
      if (number % i === 0) {
        lastFactor = i;
        number /= lastFactor;
      }
    }
  }

  console.log(lastFactor);
}

main();
