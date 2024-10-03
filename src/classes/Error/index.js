class Error {
  constructor(data, message) {
    this.message = message || "Ocorreu um Erro!";
    this.error = {
      txt: data,
    };
    this.data = null;
    this.type = 0;
  }
}

module.exports = Error;
