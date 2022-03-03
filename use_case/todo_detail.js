class TodoDetailUseCase {
  constructor(repo) {
    this.repo = repo;
  }

  execute(todoId) {
    try {
      return this.repo.get(todoId);
    } catch (e) {
      return false;
    }
  }
}

module.exports = TodoDetailUseCase;
