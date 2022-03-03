const { ValidRequestObject } = require("./index");

class TodoDeleteRequestObject extends ValidRequestObject {
  constructor({ todoId }) {
    this.todoId = todoId;
  }

  isValid() {
    return true;
  }

  static factory({ todoId }) {
    return new TodoDeleteRequestObject({ todoId });
  }
}

module.exports = TodoDeleteRequestObject;
