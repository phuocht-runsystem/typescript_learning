type numberOrString = number | string;
interface User {
  id: numberOrString;
  name: numberOrString;
  email?: string; // optional
}

function printUser(user: User) {
  console.log(user.id, user.name, user.email);
}

const u1: User = { id: 1, name: 'Phuoc' };
printUser(u1); // 1 Phuoc undefined

const u2: User = { id: '123', name: 2, email: '@gmail.com' };
printUser(u2); // 123 2 @gmail.com
