function* fibbonaciGenerator() {
  let [a, b] = [0, 1];
  while (true) {
    [a, b] = [b, a + b];
    yield a;
  }
}

export default fibbonaciGenerator;
