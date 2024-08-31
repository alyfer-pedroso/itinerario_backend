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
      const { username, password, email, name, city, state, country } = req.body;
      const data = [username, password, email, name, city, state, country];

      if (data.includes(undefined) || data.includes(null) || data.includes("")) {
        return resp.json(new Error("Preencha todos os campos!", "Cadastro inválido!"));
      }

      const userExist = await services.find_company_byusername(req.body.username);
      if (userExist.length > 0) {
        resp.json(new Error("Esse usuário já está sendo usado.", "Cadastro inválido!"));
        return;
      }
      const emailExist = await services.find_company_byemail(req.body.email);
      if (emailExist.length > 0) {
        resp.json(new Error("Esse e-mail já está sendo usado.", "Cadastro inválido!"));
        return;
      }

      await services.create_company(req.body);
      resp.json(new Sucessful(req.body, "Empresa criada com sucesso!"));
    } catch (error) {
      resp.json(new Error(error.message));
    }
  },

  delete_company: async (req, resp) => {
    try {
      const { id } = req.query;

      if (!id) return resp.json(new Error("Preencha todos os campos!", "Exclusão inválida!"));

      const isvalid = await services.find_company_byid(id);
      if (isvalid.length < 1) return resp.json(new Error(`Não foi possível encontrar o ID: ${id}`, "Exclusão inválida!"));

      await services.delete_company(id);
      resp.json(new Sucessful({ id }, "Empresa excluída com sucesso!"));
    } catch (error) {
      resp.json(new Error(error.message));
    }
  },

  update_company_name: async (req, resp) => {
    try {
      const { name, id } = req.body;
      if (!name || !id) {
        return resp.json(new Error("Preencha todos os campos!", "Atualização inválida!"));
      }

      const isvalid = await services.find_company_byid(id);
      if (isvalid.length < 1) return resp.json(new Error(`Não foi possível encontrar o ID: ${id}`, "Atualização inválida!"));

      await services.update_company_name(name, id);
      resp.json(new Sucessful({ name, id }, "Nome da empresa atualizado com sucesso!"));
    } catch (error) {
      resp.json(new Error(error.message));
    }
  },
};
