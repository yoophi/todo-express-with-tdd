const { ValidRequestObject } = require("./index");

class TodoListRequestObject extends ValidRequestObject {
  constructor() {}

  isValid() {
    return true;
  }

  static factory({}) {
    return new TodoListRequestObject({});
  }
}

module.exports = TodoListRequestObject;
