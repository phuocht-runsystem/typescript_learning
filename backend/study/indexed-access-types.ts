const appUser = {
  name: 'Phuoc',
  age: 25,
  permissions: [{ id: 1, title: 'admin', description: 'full control' }],
};

type AppUser = typeof appUser;
type Permissions = AppUser['permissions'];
type Permission = Permissions[number];

type Names = string[];
type Name = Names[number]; //type Name = string
