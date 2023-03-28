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

interface Bird {
  flyingSpeed: number;
}

interface Horse {
  runnigSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runnigSpeed;
  }
  console.log("Moving with speed " + animal.speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });
