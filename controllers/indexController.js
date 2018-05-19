const mongoose = require("mongoose");
const scraper = require("../scripts/scraper");
module.exports = {
    // get index route view
    getIndexRoute: (req,res)=>{
        res.render("index/index");
    },
    displayArticles:(req,res)=>{
        scraper();
    // },
    // saveArticle:(req,res)=>{

    // },
    // saveNote:(req,res) =>{

    }
};

