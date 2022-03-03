class TodoUpdateUseCase {
  constructor(repo) {
    this.repo = repo;
  }

  execute(todoId, { title, is_completed }) {
    try {
      return this.repo.update(todoId, { title, is_completed });
    } catch (e) {
      return false;
    }
  }
}

module.exports = TodoUpdateUseCase;
