

export class Employee {

  firstName: string;
  lastName: string;
  private _department: string;

  get department(): string { return this._department; }
  set department(val: string) { this._department = val; }


  getInfo(): string {
    return `employee ${this.firstName} ${this.lastName} is a ${this.department}`;
  }
}

export const PI = 3.14;

