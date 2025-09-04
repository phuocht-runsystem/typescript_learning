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

// -----------------------------------------------
interface Authenticable {
  email: string;
  password: string;

  login(): void;
  logout(): void;
}

interface Authenticable {
  role: string;
}

interface AuthenticableAdmin extends Authenticable {
  name: string;
}

class AuthenticableUser implements Authenticable {
  constructor(
    public email: string,
    public password: string,
    public userName: string,
  ) {}

  login(): void {
    //code
  }

  logout(): void {
    //code
  }
}

let user: Authenticable;
user = {
  email: 'phuocht@runsystem.net',
  password: '123456',
  role: 'admin',
  login() {
    //code
  },
  logout() {
    //code
  },
};

function authenticate(user: Authenticable) {
  user.login();
}
