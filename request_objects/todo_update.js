const { ValidRequestObject } = require("./index");

class TodoUpdateRequestObject extends ValidRequestObject {
  constructor({ todoId, title, is_completed }) {
    this.todoId = todoId;
    this.title = title;
    this.is_completed = is_completed;
  }

  isValid() {
    return true;
  }

  static factory({ todoId, title, is_completed }) {
    return new TodoUpdateRequestObject({ todoId, title, is_completed });
  }
}

module.exports = TodoUpdateRequestObject;
