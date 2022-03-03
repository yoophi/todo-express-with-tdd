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
    return newTodo;
  }

  update(todoId, { title, is_completed }) {
    if (!this.get(todoId)) {
      return false;
    }

    const updateData = {};
    if (title) {
      updateData.title = title;
    }
    if (is_completed === true || is_completed === false) {
      updateData.is_completed = is_completed;
    }

    this.todoObjects = this.todoObjects.map((todoObject) => {
      return todoObject.id === todoId
        ? { ...todoObject, ...updateData }
        : todoObject;
    });
    return true;
  }

  delete(todoId) {
    if (!this.get(todoId)) {
      return false;
    }

    this.todoObjects = this.todoObjects.filter((todoObject) => {
      return todoObject.id !== todoId;
    });
    return true;
  }
}

module.exports = MemRepo;
