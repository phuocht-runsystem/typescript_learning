function add(a: number, b: number) {
  return a + b;
}

type AddFn = typeof add;
type ReturnValueType<T> = T extends (...args: any[]) => infer RV ? RV : T;
type AddFnReturnValueType = ReturnValueType<AddFn>; //type AddFnReturnValueType = number
type AddFnReturnValueType2 = ReturnType<AddFn>; //deifne by TS
