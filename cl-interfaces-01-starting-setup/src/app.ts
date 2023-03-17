// 상속과 인터페이스도 구현 하는법
interface Named {
  readonly name: string;

  // readonly 제어도 추가 가능
  // public private는 추가 불가능
  // 즉 class 에도 영향을 미치게 됩니다.
}

interface Greetable extends Named {
  // , 이용해 확장 가능하며 class는 불가능 합니다.
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
