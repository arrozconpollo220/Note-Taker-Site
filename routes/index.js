// setting up "router from express"
const router = require ("express").Router();
router.use("/notes", require("./apiroutes"));

//exporting router
module.exports = router