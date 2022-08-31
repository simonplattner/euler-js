function* takeWhile(iter, predicate) {
  for (const x of iter) {
    if (!predicate(x)) {
      return;
    }
    yield x;
  }
}

function* take(iter, number) {
  let alreadyTaken = 0;
  for (const x of iter) {
    if (alreadyTaken === number) {
      return;
    }
    alreadyTaken++;
    yield x;
  }
}

function* skip(iter, number) {
  let alreadySkipped = 0;
  for (const x of iter) {
    if (alreadySkipped >= number) {
      yield x;
    }
    alreadySkipped++;
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

function takeFirst(iter) {
  const [first] = iter;
  return first;
}

function stream(generator) {
  return {
    previousGenerator: generator,
    takeWhile(predicate) {
      this.previousGenerator = takeWhile(this.previousGenerator, predicate)
      return this;
    },
    take(number) {
      this.previousGenerator = take(this.previousGenerator, number)
      return this;
    },
    skip(number) {
      this.previousGenerator = skip(this.previousGenerator, number)
      return this;
    },
    filter(predicate) {
      this.previousGenerator = filter(this.previousGenerator, predicate);
      return this;
    },
    reduce(accumulator, identity) {
      return reduce(this.previousGenerator, accumulator, identity);
    },
    takeFirst() {
      return takeFirst(this.previousGenerator);
    },
    toArray() {
      return [...this.previousGenerator];
    }
  };
}

export default stream;
