//-----------Array----------------------//
const hobbies = ['Sports', 'Cooking'];
const usersName: string[] = ['phuoc'];
//const usersData: (string | number)[] = ['phuoc', 23, 169, 55, 'Cooking'];
const usersData: Array<string | number> = ['phuoc', 23, 169, 55, 'Cooking'];

hobbies.push('123');

console.log(hobbies);
console.log(usersName);
console.log(usersData);

// usersName.push(hobbies); //wrong
usersName.push(...hobbies); //correct

const add = (...inputNumbers: number[]) => {
  return inputNumbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addnumber4 = add(5, 10, 10.2, 30.5);
console.log(addnumber4);

const addnumber3 = add(5, 10, 10.2);
console.log(addnumber3);

const [hobby1, hobby2, ...remainHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2, remainHobbies);

//tuples
const twoNumbers: [number, number] = [5, 10];
// twoNumbers = [5, 10, 11]; //wrong

console.log(twoNumbers);

//-----------Object----------------------//
console.log('-----------Object----------------------');
const user: {
  name: string;
  age: number | string;
  hobbies: string[];
  role: {
    id: number;
    department: string;
  };
} = {
  name: 'Phuoc',
  age: 25,
  hobbies,
  role: {
    id: 5612,
    department: 'Ruby',
  },
};

console.log(user);

// const { name, age } = user;
// console.log(name, age);

const { name: phuocName, age: phuocAge } = user;
console.log(phuocName, phuocAge);
// console.log(age); //wrong -> age is replace by phuocAge

//record
console.log('-----------record----------------------');
let data: Record<string, number | string>;
data = {
  name: 'phuoc',
  age: 25,
};

data = {
  name: 'phuocht',
  age: '25',
};

console.log(data);
