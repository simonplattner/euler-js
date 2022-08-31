// https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes

// this is an incremental sieve

function* primeGenerator() {

  // i use this array as a map<integer, <set<prime factor>>. to avoid offset calculations, the two first elements are left empty.
  const sieve = [];

  for (let i = 2; ; i++) {
    if (sieve[i] === undefined) {
      sieve[i * i] = createSetIfRequiredAndAdd(sieve[i * i], i);
      yield i;
      continue;
    }

    for (let factor of Array.from(sieve[i])) {
      sieve[i + factor] = createSetIfRequiredAndAdd(sieve[i + factor], factor);
    }
  }
}

function createSetIfRequiredAndAdd(set, value) {
  if (set === undefined) {
    set = new Set();
  }
  set.add(value);
  return set;
}

export default primeGenerator;
