const Todo = require("../domain/entity/todo");

class MemRepo {
  constructor(todoObjects) {
    this.todoObjects = todoObjects;
  }

  list() {
    return this.todoObjects.map((todoObject) => Todo.factory(todoObject));
  }
}

module.exports = MemRepo;
