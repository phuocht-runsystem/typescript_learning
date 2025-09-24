import { log } from 'console';

function logger<T extends new (...args: any[]) => any>(
  target: T,
  ctx: ClassDecoratorContext,
) {
  console.log('logger decorator');
  console.log(target);
  console.log(ctx);

  return class extends target {
    constructor(...args: any[]) {
      super(...args);
      console.log('class constructor');
      console.log(this);
    }
  };
}

function autobind(
  target: (...args: any[]) => any,
  ctx: ClassMethodDecoratorContext,
) {
  ctx.addInitializer(function (this: any) {
    this[ctx.name] = this[ctx.name].bind(this);
  });

  return function (this: any) {
    console.log('Executing');
    target.apply(this);
  };
}

function replacer<T>(initValue: T) {
  return function replaceDecorator(
    target: undefined,
    ctx: ClassMethodDecoratorContext,
  ) {
    console.log(target);
    console.log(ctx);

    return (initialValue: any) => {
      console.log(initialValue);
      return initValue;
    };
  };
}

@logger
class Person {
  @replacer('Romeo')
  name = 'Phuoc';

  constructor() {
    this.greet = this.greet.bind(this);
  }

  @autobind
  greet() {
    console.log(`Hi, I am ${this.name}`);
  }
}

const phuoc = new Person();
const juliet = new Person();
const greet = phuoc.greet;
greet();
