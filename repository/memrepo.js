const { nanoid } = require("nanoid");
const Todo = require("../domain/entity/todo");

class MemRepo {
  constructor(todoObjects) {
    this.todoObjects = todoObjects;
  }

  list() {
    return this.todoObjects.map((todoObject) => Todo.factory(todoObject));
  }

  get(id) {
    try {
      const todoObject = this.todoObjects.filter(
        (todoObject) => todoObject.id === id
      )[0];
      return Todo.factory(todoObject);
    } catch (e) {
      return null;
    }
  }

  create(title) {
    const newTodo = { id: nanoid(), title, is_completed: false };
    this.todoObjects = [...this.todoObjects, newTodo];
    return true;
  }
}

module.exports = MemRepo;
