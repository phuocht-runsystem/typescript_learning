type DataStore = {
  [prop: string]: number | boolean;
};

const store: DataStore = {};
store.id = 5;
store.isOpen = true;
// store.name = 'store name'; //wrong

const roles = ['admin', 'guest', 'editor'] as const; //readonly
// roles.push('max'); //wrong
console.log(roles[0]);

const dataEntries = {
  entry1: 0.51,
  entry2: -1.51,
} satisfies Record<string, number>;

// console.log(dataEntries.entry3); //wrong
console.log(dataEntries.entry1);
