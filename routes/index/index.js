const express = require("express");
const router =  express.Router();
const indexController = require("../../controllers/indexController");

//get index route view 
router.get('/', indexController.getIndexRoute);

module.exports = router;