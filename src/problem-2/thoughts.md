This can be solved by _generate and test_.

Something like:

```java
public static void main(String[] args) {

  final var sum = Fibbonaci.stream()
    .takeWhile(s -> s <= 4000000)
    .filter(s -> s % 2 == 0)
    .sum();

  System.out.println(sum);
}

--------

import java.util.stream.IntStream;

public class Fibbonaci {

  private int a = 1;
  private int b = 0;

  public static IntStream stream() {
    final var fibbonaci = new Fibbonaci();
    return IntStream.generate(fibbonaci::supply);
  }

  private int supply() {
    final var c = a + b;
    a = b;
    b = c;
    return c;
  }
}
```

As odd numbers are ignored anyways, we might as well use the entire Fibbonaci sequence instead of starting with 1 and 2. This allows reuse of the Fibbonaci generator.
