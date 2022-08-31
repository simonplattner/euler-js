function main() {

  const limit1 = 999;
  const limit2 = 999;

  let currentMax = 0;
  for (let i = 0; i <= limit1; i++) {
    for (let j = 0; j <= limit2; j++) {
      const product = i * j;
      if (isPalindrome(product) && product > currentMax) {
        currentMax = product;
      }
    }
  }

  console.log(currentMax);
}

function isPalindrome(number) {
  const numberAsString = number.toString();
  for (let i = 0; i < numberAsString.length / 2; i++) {
    if (numberAsString.charAt(i) !== numberAsString.charAt(numberAsString.length - 1 - i)) {
      return false;
    }
  }
  return true;
}

main();
