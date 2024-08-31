const { Error } = require("../../class");

const authToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  const expectedToken = process.env.TOKEN;
  if (token !== expectedToken) return res.status(403).json(new Error("Token inválido!", "Autenticação bloqueada!"));

  next();
};

module.exports = authToken;
