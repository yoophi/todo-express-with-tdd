const Todo = require("../domain/entity/todo");
const TodoDetailUseCase = require("./todo_detail");

describe("Todo 상세 조회", () => {
  test("repo.get 을 이용해 상세정보 조회", () => {
    const task1 = Todo.factory({
      id: "1",
      title: "Task 1",
    });
    const todoEntities = [task1];

    const repo = {};
    repo.get = jest.fn(() => todoEntities[0]);

    const todo_list_use_case = new TodoDetailUseCase(repo);
    const result = todo_list_use_case.execute("1");

    expect(result).toBe(todoEntities[0]);
    expect(repo.get.mock.calls.length).toBe(1);
  });

  test("repo.get 호출 중 Exception 처리", () => {
    const repo = {};
    repo.get = jest.fn(() => {
      throw Error("some error");
    });

    const todo_list_use_case = new TodoDetailUseCase(repo);
    const result = todo_list_use_case.execute("1");

    expect(repo.get.mock.calls.length).toBe(1);
    expect(result).toStrictEqual({ message: "some error" });
  });
});
