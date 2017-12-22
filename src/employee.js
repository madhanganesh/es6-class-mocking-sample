const Helper = require('./helper');

class Employee {
  constructor(name) {
    this.name = name;
  }

  getId() {
    const helper = new Helper();
    const id = helper.getRandom();

    return `${this.name}-${id}`;
  }
}

module.exports = Employee;
