const { ValidRequestObject } = require("./index");

class TodoCreateRequestObject extends ValidRequestObject {
  constructor({ title, is_completed }) {
    this.title = title;
    this.is_completed = is_completed;
  }

  isValid() {
    return true;
  }

  static factory({ title, is_completed }) {
    return new TodoCreateRequestObject({ title, is_completed });
  }
}

module.exports = TodoCreateRequestObject;
