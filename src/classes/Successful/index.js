class Successful {
  constructor(data, message) {
    this.message = message || "Sucesso!";
    this.error = null;
    this.data = data;
    this.type = 1;
  }
}

module.exports = Successful;
