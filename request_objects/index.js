class InvalidRequestObject {
  constructor() {
    this.errors = [];
  }

  addError(parameter, message) {
    this.errors.push({
      parameter,
      message,
    });
  }

  hasErrors() {
    return this.errors.length > 0;
  }

  isValid() {
    return false;
  }
}

class ValidRequestObject {
  constructor() {}

  isValid() {
    return true;
  }

  static factory() {}
}

module.exports = {
  InvalidRequestObject,
  ValidRequestObject,
};
