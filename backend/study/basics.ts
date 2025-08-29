const userName: string = 'phuoc';
const userAge = 25;
let userData: any;

userData = 'male';
userData = true;
userData = 25;
userData = ['eat', 'sleep', 'code'];

function sum(a: number, b = 25): string {
  return a.toString() + b.toString();
}

function sumNumber(a: number, b = 25) {
  return a + b;
}

console.log(userName);
console.log(userAge);
console.log(userData);
console.log(sum(10));
console.log(sum(10, 30));
console.log(sumNumber(10));
console.log(sumNumber(10, 30));
