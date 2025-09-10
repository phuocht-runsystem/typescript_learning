type Operations = {
  readonly add: (a: number, b: number) => number;
  subtract: (a: number, b: number) => number;
};

type Results<T> = {
  -readonly [Key in keyof T]: number;
};

const mathOperations: Operations = {
  add(a: number, b: number) {
    return a + b;
  },

  subtract(a: number, b: number) {
    return a - b;
  },
};

const mathResults: Results<Operations> = {
  add: mathOperations.add(5, 1),
  subtract: mathOperations.subtract(5, 1),
};

mathResults.add = 10;
