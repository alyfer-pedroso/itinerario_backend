const express = require("express");
const router = express.Router();

const { authToken } = require("../data/constants");

// #region Controllers
const companies = require("../data/controllers/companies");
// #endregion Controllers

//#region GET

//#region Companies
router.get("/companies/all", authToken, companies.all_companies);
//#endregion Companies

//#endregion GET

//#region POST

//#region Companies
router.post("/companies/register", authToken, companies.create_company);
//#endregion Companies

//#endregion POST

//#region PATCH

//#region Companies
router.patch("/companies/update_name", authToken, companies.update_company_name);
// #endregion Companies

//#endregion PATCH

//#region DELETE

//#region Companies
router.delete("/companies/delete", authToken, companies.delete_company);
//#endregion Companies

//#endregion DELETE

module.exports = router;
