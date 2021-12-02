class TodoListUseCase {
  constructor(repo) {
    this.repo = repo;
  }

  execute() {
    try {
      return this.repo.list();
    } catch (e) {
      return {
        message: e.message,
      };
    }
  }
}

module.exports = TodoListUseCase;
