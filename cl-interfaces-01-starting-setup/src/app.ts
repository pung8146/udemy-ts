
인터페이스는 객체의 구조를 정의하지만
함수의 구조를 정의 하는 데에도 사용됩니다. 
인터페이스를 사용하여 함수를 생성할 수 있습니다.
interface AddFn {
    (a:number , b:number): number;
}

type AddFn = (a:number,b: number) => number;

let add: AddFn;

add = (n1: number, n2:number) => {
    return n1 + n2
}

interface Named {
  readonly name: string;
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
