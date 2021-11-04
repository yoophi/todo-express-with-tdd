class Todo {
  constructor({ id, title, is_completed }) {
    this.id = id;
    this.title = title;
    this.is_completed = is_completed;
  }

  static factory({ id, title, is_completed = false }) {
    title = title.trim();
    if (title.length === 0) {
      throw new TypeError("title is invalid");
    }
    is_completed = !!is_completed;

    return new Todo({
      id,
      title,
      is_completed,
    });
  }

  isEqual(target) {
    return (
      this.id === target.id &&
      this.title === target.title &&
      this.is_completed === target.is_completed
    );
  }

  toObject() {
    return {
      id: this.id,
      title: this.title,
      is_completed: this.is_completed,
    };
  }
}

module.exports = Todo;
