// 클래스와 달리 interface 는 청사진으로 사용되지않으며
// 사용자 정의 타입으로 사용할 뿐 입니다.

// Person 객체가 가질 메소드를 정의 하는 것입니다
interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
  // 이름 ,괄호 쌍, 반화타입, 입력후 void를 입력합니다
  // 그후 괄호안에  원하는 입수를 입력합니다.
  // 정리하자면 이눗의 이름과 타입, 이어서 메소드의 반환 타입 순서입니다
}

let user1: Person

user1 = {
    name: 'Max,'
    age: 30,
    greet(phrase: string) {
        console.log(phrase + ' ' + this.name)
    }
};

user1.greet('Hi there - I am')

// Person 인터페이스로 할 수 있는것
1. 객체의 타입을 확인 하는데 사용 할 수 있으며
    user1이라는 변수를 입력하고  
     