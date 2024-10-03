const db = require("../../database");

module.exports = {
  find_company_byid: (id) => {
    return new Promise((accept, reject) => {
      db.query("SELECT * FROM companies WHERE id = ?", [id], (error, result) => {
        if (error) return reject(error);
        accept(result);
      });
    });
  },

  find_company_byemail: (email) => {
    return new Promise((accept, reject) => {
      db.query("SELECT * FROM companies WHERE email = ?", [email], (error, result) => {
        if (error) return reject(error);
        accept(result);
      });
    });
  },

  find_company_byusername: (username) => {
    return new Promise((accept, reject) => {
      db.query("SELECT * FROM companies WHERE username = ?", [username], (error, result) => {
        if (error) return reject(error);
        accept(result);
      });
    });
  },

  all_companies: () => {
    return new Promise((accept, reject) => {
      db.query("SELECT * FROM companies", (error, result) => {
        if (error) return reject(error);
        accept(result);
      });
    });
  },

  create_company: ({ ...data }) => {
    return new Promise((accept, reject) => {
      db.query(
        "INSERT INTO companies (username, password, email, name, city, state, country) VALUES (?, ?, ?, ? ,?, ?, ?)",
        Object.values(data),
        (error, result) => {
          if (error) return reject(error);
          accept(result);
        }
      );
    });
  },

  delete_company: (id) => {
    return new Promise((accept, reject) => {
      db.query("DELETE FROM companies WHERE id = ?", [id], (error, result) => {
        if (error) return reject(error);
        accept(result);
      });
    });
  },

  update_company_name: (name, id) => {
    return new Promise((accept, reject) => {
      db.query("UPDATE companies SET name = ? WHERE companies.id = ?", [name, id], (error, result) => {
        if (error) return reject(error);
        accept(result);
      });
    });
  },
};
