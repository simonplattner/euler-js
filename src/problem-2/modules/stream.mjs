function* takeWhile(iter, predicate) {
  for (const x of iter) {
    if (!predicate(x)) {
      return;
    }
    yield x;
  }
}

function* filter(iter, predicate) {
  for (const x of iter) {
    if (predicate(x)) {
      yield x;
    }
  }
}

function reduce(iter, accumulator, identity) {
  let result = identity;
  for (const x of iter) {
    result = accumulator(result, x);
  }
  return result;
}

function stream(generator) {
  return {
    previousGenerator: generator,
    takeWhile(predicate) {
      this.previousGenerator = takeWhile(this.previousGenerator, predicate)
      return this;
    },
    filter(predicate) {
      this.previousGenerator = filter(this.previousGenerator, predicate);
      return this;
    },
    reduce(accumulator, identity) {
      return reduce(this.previousGenerator, accumulator, identity);
    }
  };
}

export default stream;
