인터섹션 타입을 사용하여 다른 타입과 결합할 수 있습니다. 

인터섹션 연산자는 어떤 타입과도 사용할 수 있어서 이러한
타입들이 교차하도록 간단하게 구현할 수 있습니다.

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Employee, Admin {}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;
