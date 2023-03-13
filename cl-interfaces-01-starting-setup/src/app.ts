class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }
  //예약어
  describe() {
    console.log("Department: " + this.name);
  }
}

const accounting = new Department("Accounting");

console.log(accounting);

const accountingCopy = { name : 'DUMMY'  describe: accounting.describe };

accounting.describe();
