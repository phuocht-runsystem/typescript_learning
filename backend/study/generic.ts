function identity<type>(returnValue: type): type {
  return returnValue;
}

const a = identity<string>('hello');
const b = identity<number>(123);

console.log('This is string from identity: ' + a);
console.log('This is number from identity: ' + b);

const names: Array<string> = ['Phuoc', 'GMO'];
console.log(names);

type DataStore<T> = {
  [key: string]: T;
};
const store: DataStore<string | boolean> = {};
store.name = 'Max';
store.isOpen = true;

function merge<T>(a: T, b: T) {
  return [a, b];
}
// const ids = merge(1, 'a'); //wrong
const ids = merge(1, 2);
console.log(ids);

function merge2<X, Y>(a: X, b: Y) {
  return [a, b];
}
const ids2 = merge2(1, 'a'); //correct
console.log(ids2);

function mergeObj<T extends object>(a: T, b: T) {
  return { ...a, ...b };
}
// const merged = mergeObj(1, 2); //wrong
const mergedObj = mergeObj({ userName: 'Phuoc' }, { age: 25 });
console.log(mergedObj);

class User<T> {
  constructor(public id: T) {}
}
const user = new User('123');
console.log(user.id);
const user2 = new User(123);
console.log(user2.id);
