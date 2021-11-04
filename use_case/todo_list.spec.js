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
    const domainTodos = [task1, task2, task3];

    repo = {};
    repo.list = jest.fn(() => domainTodos);

    todo_list_use_case = new TodoListUseCase(repo);
    result = todo_list_use_case.execute();

    expect(result).toBe(domainTodos);
    expect(repo.list.mock.calls.length).toBe(1);
  });
});
