enum Role {
  Admin,
  Editor = 'Editor',
  User = 1,
}

const userRole: Role = 1;
const adminRole = Role.Admin;
console.log(userRole);
console.log(adminRole);

let binaryNumberArray: 1 | -1 | 0;
binaryNumberArray = 0;
binaryNumberArray = 1;

type roleType = 'user' | 'admin' | 'super_admin';
// let role: 'user' | 'admin' | 'super_admin';
let role: roleType;
role = 'user';
role = 'super_admin';

console.log(binaryNumberArray);
console.log(role);
