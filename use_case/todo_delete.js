class TodoDeleteUseCase {
  constructor(repo) {
    this.repo = repo;
  }

  execute(todoId) {
    try {
      return this.repo.delete(todoId);
    } catch (e) {
      return false;
    }
  }
}

module.exports = TodoDeleteUseCase;
