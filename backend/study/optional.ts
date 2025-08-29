function generateError(msg?: string) {
  throw new Error(msg);
}

generateError();
generateError('msg in error is optional');

type User = {
  name: string;
  age: number;
  role?: 'admin' | 'user';
};

const user: User = {
  name: 'phuoc',
  age: 25,
};

console.log(user);
