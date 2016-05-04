class Response {
  constructor(validator, emitter) {
    this.emitter = emitter;
    this.validator = validator;
  }

  accountBalance(error, response) {
    this.validator.response(error, response);
    this.emitter.log(
      response.value,
      `Balance: ${response.value}`
    );
  }

  numbersList(error, response) {
    this.validator.response(error, response);
    if (response.numbers && response.numbers.length > 0) {
      this.emitter.table(response.numbers, ['msisdn'], ['msisdn', 'country', 'type', 'features']);
    } else {
      this.emitter.warn('No numbers');
    }
  }
}

export default Response;
