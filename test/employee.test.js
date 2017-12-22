const expect = require('chai').expect;
const sinon = require('sinon');

const Employee = require('../src/employee');
const Helper = require('../src/helper');

describe('employee test', () => {
  it('should return right id', () => {
    // Arrange
    sinon.stub(Helper.prototype, 'getRandom').callsFake(() => 1);

    // Act
    const employee = new Employee('Velu');
    const id = employee.getId();

    // Assert
    expect(id).to.equals('Velu-1');
  });
});
