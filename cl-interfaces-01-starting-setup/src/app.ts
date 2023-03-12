class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }
  //예약어
}

const accounting = new Department("Accounting");

console.log(accounting);
