type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;
// 객체 타입 : 객체 속성의 조합 입니다.

// interface Admin = {
//     name: string;
//     privileges: string[];
//   };

//   interface Employee = {
//     name: string;
//     startDate: Date;
//   };

// interface ElevatedEmployee extends Employee, Admin {

// }
// type 은 interface비해 코드 길이가 작습니다.

const e1: ElevatedEmployee = {
  name: "Hoon",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;
// 유니언 타입 으로 작성된코드
// 유니언 타입은 타입 간에 공통점이 있는 타입입니다.
