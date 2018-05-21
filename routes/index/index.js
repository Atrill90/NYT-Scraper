const express = require("express");
const router =  express.Router();
const indexController = require("../../controllers/indexController");

//get index route view 
router.get('/', indexController.getIndexRoute);
//get articles 
router.get('/display-articles', indexController.displayArticles);

router.post("/save/:id", indexController.saveMe);

router.get("/saved-articles",indexController.showMe)

module.exports = router;