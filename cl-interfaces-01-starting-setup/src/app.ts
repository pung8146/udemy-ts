class Department {
  name: string;
  private employees: string[] = []
  // private의 의미는 employees가 이제 클래스, 즉 , 생성된 객체
  // 내부에서만 접근할 수 있는 속성이 되었다는 것입니다
  // 즉 private은 없는건 자동적으로 앞에 public 으 붙어있는거같음   
  // public은 외부에서 접근 할 수 있습니다
  // 자바스크립트에서 최근까지도 없던 개념이라 적용이 안될수도있습니다
  constructor(n: string) {
    this.name = n;
  }
  //예약어
  describe() {
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string){
    this.employees.push(employee)
  }

  printEmployeeInformation()

  console.log(this.employees.length)
  console.log(this.employees)
}

accounting.addEmployee('Max');
accounting.addEmployee('Manu');
// 클래스 외부에서 employees 에 접근허용을 해서는 안됩니다.
accounting.employees[2] = 'Anna';

accounting.describe();
accounting.printEmployeeInformation();

const accounting = new Department("Accounting");

console.log(accounting);

const accountingCopy = { name : 'DUMMY'  describe: accounting.describe };

accounting.describe();
