// create router for postActivity
const express = require("express");
const router = express.Router();
const postActivityController = require("../controllers/postActivityController");
const authentication = require("../middleware/authentication");
const passportJWT = require('../middleware/passportJWT');


router.post("/", [ passportJWT.isLogin,authentication.isStore ] , postActivityController.create);
router.get("/", [ passportJWT.isLogin,authentication.isStoreOrUser ] , postActivityController.findAll);
router.get("/:id", [ passportJWT.isLogin,authentication.isStoreOrUser ] , postActivityController.findOne);
router.put("/:id", [ passportJWT.isLogin,authentication.isStore ] , postActivityController.update);
router.delete("/:id", [ passportJWT.isLogin,authentication.isStore ] , postActivityController.delete);

module.exports = router;