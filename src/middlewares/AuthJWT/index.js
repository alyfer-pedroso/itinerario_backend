const jwt = require("jsonwebtoken");
const { Error } = require("../../classes");

module.exports = AuthJWT = (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    const secret_key = process.env.SECRET_KEY;
    jwt.verify(token, secret_key);
    next();
  } catch (error) {
    res.status(403).json(new Error("Token inválido", "Autenticação bloqueada!"));
  }
};
