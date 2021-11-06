#!/usr/bin/env node

const program = require("commander");
require("console.table");

const packageJson = require("./package.json");

program.version(packageJson.version, "-v, --version");

program
  .command("todo-list")
  .description("할 일 목록을 가져옵니다.")
  .alias("list")
  .alias("todos")
  .action((type, options) => {
    console.log("print todos.");
    console.log("");
    console.table([
      { id: 1, title: "Task 1", is_completed: false },
      { id: 2, title: "Task 2", is_completed: true },
      { id: 3, title: "Task 3", is_completed: false },
    ]);
  });

program
  .command("todo")
  .description("할 일 항목을 가져옵니다.")
  .option("-n, --todo-id <id>", "할 일 번호를 입력하세요.")
  .action((type, options) => {
    const todoId = type.todoId;
    console.log(`print todo:${todoId} detail.`);
  });

program.parse(process.argv);
