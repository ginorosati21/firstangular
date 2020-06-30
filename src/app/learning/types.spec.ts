import { Employee } from './hr/employee';
describe('writing jasmine specs', () => {
  it('it is easy', () => {
    const a = 10;
    const b = 20;
    const answer = a + b;

    expect(answer).toBe(30);
  });
});


describe('variables and stuff', () => {
  it('declaring variables', () => {


    let x;
    x = 'Tacos';


    x = 3.14;


    x = (a, b) => a + b;
  });
  it('declaring variables with union type', () => {

    let x: number | string;
    x = 12;
    x = 'Tacos';


  });
  it('initializing a variable', () => {
    let x = 22;

    x = 32;

    // x = 'Tacos';

  });
  it('has some literals', () => {
    const bigNumber = 1_000_000;

  });
  it('using const and let', () => {
    // type your test
  });
});
describe('array methods', () => {

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  it('going through each element of an array', () => {
    numbers.forEach(n => console.log(n));
  });

  it('can change something to another thing', () => {
    const doubled = numbers.map(n => n * 2);

  });
});

describe('using modules', () => {

  it('cresting an instance of a class', () => {
    const employee = new Employee();
    employee.firstName = 'Robert';
    employee.lastName = 'Smith';
    employee.department = 'Singer';

    const info = employee.getInfo();
    expect(info).toBe('employee Robert Smith is a Singer');
  });
});
