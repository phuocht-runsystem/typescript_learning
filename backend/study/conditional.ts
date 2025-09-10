type StringArray = string[];
type ElementType<T extends any[]> = T[number];

type Example1 = ElementType<StringArray>; //type Example1 = string
type Example2 = ElementType<number[]>; //type Example1 = number

type GetElementType<T> = T extends any[] ? T[number] : never;
type Example3 = GetElementType<StringArray>;
type Example4 = GetElementType<string>;

type FullNamePerson = { firstName: string; lastName: string };
type FullNameOrNothing<T> = T extends FullNamePerson ? string : never;
function getFullname<T extends object>(person: T): FullNameOrNothing<T> {
  if (
    'firstName' in person &&
    'lastName' in person &&
    person.firstName &&
    person.lastName
  ) {
    return person.lastName as FullNameOrNothing<T>;
  }

  throw new Error('error');
}

const name1 = getFullname({}); //const name1: never
const name2 = getFullname({ firtName: 'Phuoc', lastName: 'Ho' }); //const name1: never
