const services = require("../../services/companies");
const { Sucessful, Error } = require("../../../class");

module.exports = {
  all_companies: async (_, resp) => {
    try {
      const companies = await services.all_companies();
      resp.json(new Sucessful(companies));
    } catch (error) {
      resp.json(new Error(error));
    }
  },

  create_company: async (req, resp) => {
    try {
      if (Object.values(req.body).length === 0 || Object.values(req.body).includes(null || undefined || "")) {
        return resp.json(new Error("Preencha todos os campos!", "Cadastro inválido!"));
      }

      const userExist = await services.find_company_byusername(req.body.username);
      if (userExist.length > 0) return resp.json(new Error("Esse usuário já está sendo usado.", "Cadastro inválido!"));
      const emailExist = await services.find_company_byemail(req.body.email);
      if (emailExist.length > 0) return resp.json(new Error("Esse e-mail está sendo usado.", "Cadastro inválido!"));

      await services.create_company(req.body);
      resp.json(new Sucessful(req.body, "Usuário criado com sucesso!"));
    } catch (error) {
      resp.json(new Error(error.message));
    }
  },
};
