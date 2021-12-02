const { v4: uuid } = require("uuid");
const Todo = require("../domain/entity/todo");
const TodoListUseCase = require("./todo_list");

describe("Todo 목록 조회", () => {
  test("repo.list 값을 가져온다", () => {
    const task1 = Todo.factory({
      id: uuid(),
      title: "Task 1",
    });
    const task2 = Todo.factory({
      id: uuid(),
      title: "Task 2",
    });
    const task3 = Todo.factory({
      id: uuid(),
      title: "Task 3",
    });
    const todoEntities = [task1, task2, task3];

    const repo = {};
    repo.list = jest.fn(() => todoEntities);

    const todo_list_use_case = new TodoListUseCase(repo);
    const result = todo_list_use_case.execute();

    expect(result).toBe(todoEntities);
    expect(repo.list.mock.calls.length).toBe(1);
  });

  test("repo.list 호출 중 Exception 처리", () => {
    const repo = {};
    repo.list = jest.fn(() => {
      throw Error("some error");
    });

    const todo_list_use_case = new TodoListUseCase(repo);
    const result = todo_list_use_case.execute();

    expect(repo.list.mock.calls.length).toBe(1);
    expect(result).toStrictEqual({ message: "some error" });
  });
});
