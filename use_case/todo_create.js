class TodoCreateUseCase {
  constructor(repo) {
    this.repo = repo;
  }

  execute({ title }) {
    try {
      return this.repo.create(title);
    } catch (e) {
      return false;
    }
  }
}

module.exports = TodoCreateUseCase;
