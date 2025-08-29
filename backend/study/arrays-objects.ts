//-----------Array----------------------//
const hobbies = ['Sports', 'Cooking'];
const usersName: string[] = ['phuoc'];
//const usersData: (string | number)[] = ['phuoc', 23, 169, 55, 'Cooking'];
const usersData: Array<string | number> = ['phuoc', 23, 169, 55, 'Cooking'];

hobbies.push('123');

console.log(hobbies);
console.log(usersName);
console.log(usersData);

//typles
const twoNumbers: [number, number] = [5, 10];
// twoNumbers = [5, 10, 11]; //wrong

console.log(twoNumbers);

//-----------Object----------------------//
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

//record
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
