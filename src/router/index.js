const express = require("express");
const router = express.Router();

const { AuthJWT } = require("../middlewares");

// #region Controllers
const { Companies } = require("../data/controllers");
// #endregion Controllers

//#region GET

//#region Companies
router.get("/companies/all", AuthJWT, Companies.all_companies);
//#endregion Companies

//#endregion GET

//#region POST

//#region Companies
router.post("/companies/register", AuthJWT, Companies.create_company);
//#endregion Companies

//#endregion POST

//#region PATCH

//#region Companies
router.patch("/companies/update_name", AuthJWT, Companies.update_company_name);
// #endregion Companies

//#endregion PATCH

//#region DELETE

//#region Companies
router.delete("/companies/delete", AuthJWT, Companies.delete_company);
//#endregion Companies

//#endregion DELETE

module.exports = router;
