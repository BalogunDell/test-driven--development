import { mocha } from 'mocha';
import { chai, expect } from 'chai';
import { Employee } from './index';

describe('Employee Class', () => {
  it('should create an employee', (done) => {
    const employeeData = {
      firstName: 'Bright',
      lastName: 'Stones',
      age: 29,
      role: 'develop-one'
    }
    const employee1 = new Employee(employeeData);
    expect(employee1.age).to.equal(employeeData.age);
    expect(employee1.firstName).to.equal(employeeData.firstName);
    expect(employee1.role).to.equal(employeeData.role);
    expect(employee1.lastName).to.equal(employeeData.lastName);
  });
});