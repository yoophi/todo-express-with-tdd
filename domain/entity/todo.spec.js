const { v4: uuid } = require("uuid");
const Todo = require("./todo");

describe("constructor 를 이용한 Todo 모델 생성", () => {
  test("Todo 모델 초기화", () => {
    code = uuid();
    title = "Task";
    is_completed = true;
    const todo = new Todo({
      id: code,
      title,
      is_completed,
    });

    expect(todo).toBeInstanceOf(Todo);
    expect(todo.id).toEqual(code);
    expect(todo.title).toEqual(title);
    expect(todo.is_completed).toEqual(is_completed);
  });
});

describe("Factory 를 통한 Todo 모델 생성", () => {
  test("정상적인 Todo 모델 생성", () => {
    code = uuid();
    title = "Task";
    is_completed = true;
    const todo = Todo.factory({
      id: code,
      title,
      is_completed,
    });
    expect(todo).toBeInstanceOf(Todo);
    expect(todo.id).toEqual(code);
    expect(todo.title).toEqual(title);
    expect(todo.is_completed).toEqual(is_completed);
  });

  test("title 값은 string 형식이어야 한다", () => {
    code = uuid();
    title = {};
    is_completed = true;
    expect(() => {
      const todo = Todo.factory({
        id: code,
        title,
        is_completed,
      });
    }).toThrow(TypeError);
  });

  test("title 값은 공백으로만 구성될 수 없다", () => {
    code = uuid();
    title = " ";
    is_completed = true;
    expect(() => {
      const todo = Todo.factory({
        id: code,
        title,
        is_completed,
      });
    }).toThrow(TypeError);
  });

  test("title 값 공백은 제거된다", () => {
    code = uuid();
    title = "hello ";
    is_completed = true;
    const todo = Todo.factory({
      id: code,
      title,
      is_completed,
    });
    expect(todo).toBeInstanceOf(Todo);
    expect(todo.id).toEqual(code);
    expect(todo.title).toEqual("hello");
    expect(todo.is_completed).toEqual(is_completed);
  });

  test("is_completed 값의 기본값은 false 이다", () => {
    code = uuid();
    title = "Task";
    const todo = Todo.factory({
      id: code,
      title,
    });
    expect(todo).toBeInstanceOf(Todo);
    expect(todo.id).toEqual(code);
    expect(todo.title).toEqual(title);
    expect(todo.is_completed).toEqual(false);
  });
});

describe("모델을 plain object 로 변경", () => {
  test("Todo 모델을 plain object 로 변경할 수 있다", () => {
    code = uuid();
    title = "Task";
    is_completed = true;
    const todo = Todo.factory({
      id: code,
      title,
      is_completed,
    });

    const todoObj = todo.toObject();
    expect(todoObj.id).toEqual(code);
    expect(todoObj.title).toEqual(title);
    expect(todoObj.is_completed).toEqual(is_completed);
  });
});

describe("모델 비교", () => {
  test("모델간의 일치 여부를 계산할 수 있다", () => {
    code = uuid();
    title = "Task";
    is_completed = true;
    const todoA = Todo.factory({
      id: code,
      title,
      is_completed,
    });
    const todoB = Todo.factory({
      id: code,
      title,
      is_completed,
    });
    const todoC = Todo.factory({
      id: code,
      title: "Another Task",
      is_completed,
    });
    const _ = require("lodash");
    expect(_.isEqual(todoA, todoB)).toBe(true);
    expect(todoA.isEqual(todoB)).toBe(true);
    expect(todoA.isEqual(todoC)).toBe(false);
  });
});
