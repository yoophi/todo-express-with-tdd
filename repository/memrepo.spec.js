const { v4: uuid } = require("uuid");
const Todo = require("../domain/entity/todo");
const MemRepo = require("./memrepo");

const getTodosObject = () =>
  ["Task One", "Task Two", "Task Three", "Task Four"].map((title) => ({
    id: uuid(),
    title,
    is_completed: false,
  }));

const getTodosObjectWithStaticId = () => {
  let id = 1;
  return ["Task One", "Task Two", "Task Three", "Task Four"].map((title) => ({
    id: String(id++),
    title,
    is_completed: false,
  }));
};

describe("Memory Repository", () => {
  test("Parameter 없이 repo.list() 호출", () => {
    const todoObjects = getTodosObject();
    const repo = new MemRepo(todoObjects);
    const todos = todoObjects.map((todoObject) => Todo.factory(todoObject));
    expect(repo.list()).toEqual(todos);
  });

  test("repo.get() 호출", () => {
    const todoObjects = getTodosObjectWithStaticId();
    const todo = Todo.factory(todoObjects[0]);
    const repo = new MemRepo(todoObjects);
    expect(repo.get("1")).toEqual(todo);
    expect(repo.get("invalid-todo-id")).toEqual(null);
  });
});
