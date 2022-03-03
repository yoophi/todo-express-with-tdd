RESOURCE_ERROR = "ResourceError";
PARAMETERS_ERROR = "ParametersError";
SYSTEM_ERROR = "SytemError";

class ResponseFailure {
  constructor(type, message) {
    this.type = type;
    this.errors = [];
    this.message = this._formatMessage(message);
  }

  _formatMessage(msg) {
    /*
      check msg is an Error instance

      https://stackoverflow.com/questions/30469261/checking-for-typeof-error-in-js
      */
    if (msg && msg.stack && msg.message) {
      return `${msg.constructor?.name}: ${msg.message}`;
    }
    return msg;
  }

  addError(error) {
    this.errors.push(error);
  }

  get value() {
    return {
      type: this.type,
      message: this.message,
    };
  }

  static buildFromInvalidRequestObject(invalidRequestObject) {
    message = invalidRequestObject.errors
      .map((err) => `${err.parameter}: ${err.message}`)
      .join("\n");

    return new ResponseFailure(PARAMETERS_ERROR, message);
  }

  static buildResourceError(message = None) {
    return new ResponseFailure(RESOURCE_ERROR, message);
  }

  static buildSystemError(message = None) {
    return new ResponseFailure(SYSTEM_ERROR, message);
  }

  static buildParametersError(message = None) {
    return new ResponseFailure(PARAMETERS_ERROR, message);
  }
}

class ResponseSuccess {
  SUCCESS = "Success";

  constructor(value = null) {
    this.type = this.SUCCESS;
    this.value = value;
  }

  isSuccess() {
    return true;
  }

  static fromValue(value) {
    return new ResponseSuccess(value);
  }
}

module.exports = {
  ResponseFailure,
  ResponseSuccess,
};
