const { v4: uuid } = require("uuid");
const Todo = require("../domain/entity/todo");
const MemRepo = require("./memrepo");

const getTodosObject = () =>
  ["Task One", "Task Two", "Task Three", "Task Four"].map((title) => ({
    id: uuid(),
    title,
    is_completed: false,
  }));

describe("Memory Repository", () => {
  test("Parameter 없이 repo.list() 호출", () => {
    const todoObjects = getTodosObject();
    const repo = new MemRepo(todoObjects);
    const todos = todoObjects.map((todoObject) => Todo.factory(todoObject));
    expect(repo.list()).toEqual(todos);
  });
});
