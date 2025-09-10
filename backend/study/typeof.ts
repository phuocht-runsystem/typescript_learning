const userName = 'Phuoc';
console.log(userName);
type UserName = typeof userName; //type UserName = "Phuoc"

let testName = 'Phuoc';
type UserName = typeof testName; //type UserName = string

const settings = {
  difficulty: 'easy',
  minLevel: 10,
  didStart: false,
  players: ['Phuoc', 'GMO'],
};
type Settings = typeof settings;
type SettingKeys = keyof Settings;

const validKey: SettingKeys; //let validKey: "difficulty" | "minLevel" | "didStart" | "players"

// ------------------------------------------------------------------------------------------------
function getProp<T extends object, U extends keyof T>(obj: T, key: U) {
  const val = obj[key];

  if (val === undefined || val === null) {
    throw new Error('Invalid value');
  }

  return val;
}
const data = { id: 1, isTrue: false, values: [1, 2, 3] };
const isTrue = getProp(data, 'isTrue'); //  key: "id" | "isTrue" | "values"
console.log(isTrue);

const user = { name: 'Phuoc', age: 25 };
// const wrong = getProp(user, 'isTrue'); //  wrong
const name = getProp(user, 'name'); //  key: "name" | "age"
console.log(name);
