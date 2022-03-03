var express = require("express");
var router = express.Router();
var TodoListUseCase = require("../use_case/todo_list");
var TodoCreateUseCase = require("../use_case/todo_create");
var TodoDetailUseCase = require("../use_case/todo_detail");

/* GET todo listing. */
router.get("/", function (req, res, next) {
  const { app } = req;
  const repo = app.get("todoRepository");
  const useCase = new TodoListUseCase(repo);
  const resp = useCase.execute();
  res.send(resp);
});

router.post("/", function (req, res, next) {
  const { app } = req;
  const repo = app.get("todoRepository");
  const { title } = req.body;
  const useCase = new TodoCreateUseCase(repo);
  const resp = useCase.execute({ title });
  res.send(resp);
});

/* GET todo detail. */
router.get("/:id", function (req, res, next) {
  const { app } = req;
  const repo = app.get("todoRepository");
  const todoId = req.params.id;
  const useCase = new TodoDetailUseCase(repo);
  const resp = useCase.execute(todoId);
  if (resp) {
    res.send(resp);
  } else {
    res.status(404).send({});
  }
});

module.exports = router;
