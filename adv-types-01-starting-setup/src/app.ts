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

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
}

printEmployeeInformation({ name: "Manu", startDate: new Date() });

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo ..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(Vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    Vehicle.loadCargo(1000);
  }
  // instanceof는 바닐라 자바스크립트에 내장된 일반 연산자입니다.
}

// 타입가드는 특정 속성이나 메소드를 사용하기전에
// 그것이 존재하는지 확인하거나 타입을 사용하기 전에 이타입으로
// 어떤 작어블 수행할 수 있는지를확인 하는 개념 또는 방식을 나타내는 용어입니다.
// 객체의 경우 instanceof나 in 을 사용하여 수행할 수 있고
// 다른 타입들의 경우 typeof를 사용 할 수 있습니다
// 유니언 타입이 주는 유연성을 사용하여
// 런타임시 얻는 정확한 타입을 기반으로 하는 한가지 또는 다른 기능을 수행하는
// 코드를 작성할 수 있게 해줍니다
