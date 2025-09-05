function log(message: string) {
  console.log(message);
}

function performJob(cb: (msg: string) => void) {
  cb('Job done!');
}

performJob(log);

type User = {
  name: string;
  age: number;
  greet: () => string;
};

const user: User = {
  name: 'phuoc',
  age: 25,
  greet() {
    console.log('Hello there');
    return this.name;
  },
};

user.greet();

function logAndThrow(message: string): never {
  console.log(message);
  throw new Error('this is error by me');
}

logAndThrow('hello');

function getLength(val: any[]): number; //overloads
function getLength(val: string): string; //overloads
function getLength(val: string | any[]) {
  if (typeof val === 'string') {
    const numberOfWords = val.split(' ').length;
    return `${numberOfWords} words`;
  }
  return val.length;
}

const numberOfWords = getLength('does this work?');
console.log(numberOfWords.length);
const numberItems = getLength(['Sports', 'Cooking']);
console.log(numberItems);
