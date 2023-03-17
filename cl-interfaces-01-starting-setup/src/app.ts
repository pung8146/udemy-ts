interface AddFn {
  (a: number, b: number): number;
}

type AddFn = (a: number, b: number) => number;

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name: string;
  outputName?: string;
}

interface Greetable extends Named {
  age: number;
  greet(phrase: string): void;
}

class Person implements Greetable, Named {
  name: string;
  age = 30;
  constructor(n: string) {
    this.name = n;
  }

  greet() {
    console.log(pharse + " " + this.name);
  }
}

let user1: Greetable;

user1 = new Person("Max");

user1.greet("Hi there - I am");
