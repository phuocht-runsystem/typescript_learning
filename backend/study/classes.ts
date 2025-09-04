class User {
  readonly hobbies: string[] = [];

  constructor(
    public firstName: string,
    public lastName: string,
    private age: number,
  ) {}

  //getter
  public get fullName(): string {
    return this.firstName + ' ' + this.lastName;
  }
}

const fred = new User('Fred', 'David', 25);
const phuoc = new User('Phuoc', 'Ho', 25);
// phuoc.age = 35; //wrong
phuoc.firstName = 'Thien Phuoc';
phuoc.hobbies.push('Cooking');

console.log(phuoc, fred);
console.log(phuoc.fullName);

// ----------------------------------------

class Book {
  protected _page: number = 0;
  private _author: string = '';

  //setter
  public set author(author: string) {
    this._author = author;
  }

  public set page(page: number) {
    this._page = page;
  }

  //static
  static eid = 'BOOK';
  static greet() {
    console.log('Hello!');
  }
}

const book1 = new Book();
book1.author = 'Nguyen Nhat Anh';
book1.page = 100;

const book2 = new Book();
book1.author = 'Pascal';
book1.page = 200;

console.log(book1, book2);

Book.greet();

// -------------------------------------------------
class Page extends Book {
  constructor(public pageTitle: string) {
    super();
  }

  work() {
    console.log(this._page);
    // console.log(this._author); //wrong
  }
}

// ---------------------------------------------------
abstract class UIElement {
  constructor(identifier: string) {
    //code
  }

  clone(targetLocation: string){
    //code
  }
}

// let uiElement = UIElement.new();//wrong

class SideDrawerElement extends UIElement {
  constructor(public identifier: string, public position: 'left' | 'right') {
    super(identifier);
  }
}
