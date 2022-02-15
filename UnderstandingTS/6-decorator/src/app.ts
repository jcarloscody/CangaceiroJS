function Logger(constructor: Function) {
  console.log('Logging...');
  console.log(constructor);
}

@Logger
class Person {
  name = 'Max';

  constructor() {
    console.log('Creating person object...');
  }
}

const pers = new Person();

console.log(pers);

console.log('')
console.log('')
console.log('-==================================================')

function Logger2(logString: string) {
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger2('LOGGING - PERSON')
class Person2 {
  name = 'Max';

  constructor() {
    console.log('Creating person object...');
  }
}

const pers2 = new Person2();

console.log(pers);




console.log('')
console.log('')
console.log('-==================================================')


function WithTemplate(template: string, hookId: string) {
  return function(constructor: any) {
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent = p.name;
    }
  }
}

@Logger2('LOGGING')
@WithTemplate('<h1>My Person Object</h1>', 'app')   //o decorator é executado de botton to top
class Person3 {
  name = 'Max';

  constructor() {
    console.log('Creating person object...');
  }
}

const pers3 = new Person3();

console.log(pers3);




console.log('')
console.log('')
console.log('-==================================================')

function Log(target: any, propertyName: string | Symbol) {
  console.log('Property decorator!');
  console.log( 'TARGET ', target, '\n', 'PROPERTYNAME ', propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor decorator!');
  console.log('TARGET ',target);
  console.log('NAME ', name);
  console.log('DESCRIPTOR ', descriptor);
}

function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log('Method decorator!');
  console.log('TARGET ',target);
  console.log('NAME ', name);
  console.log('DESCRIPTOR ', descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log('Parameter decorator!');
  console.log('TARGET ',target);
  console.log('NAME ', name);
  console.log('POSITION ', position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('Invalid price - should be positive!');
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

const p1 = new Product('Book', 19);
const p2 = new Product('Book 2', 29);





function Logger3(logString: string) {
  console.log('LOGGER FACTORY');
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate3(template: string, hookId: string) {
  console.log('TEMPLATE FACTORY');
  return function<T extends { new (...args: any[]): {name: string} }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log('Rendering template');
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector('h1')!.textContent = this.name;
        }
      }
    };
  };
}