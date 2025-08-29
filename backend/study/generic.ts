function identity<type>(returnValue: type): type {
  return returnValue;
}

const a = identity<string>('hello');
const b = identity<number>(123);

console.log('This is string from identity: ' + a);
console.log('This is number from identity: ' + b);
