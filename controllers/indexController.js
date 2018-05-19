const mongoose = require("mongoose");
const scraper = require("../scripts/scraper");
module.exports = {
    // get index route view
    getIndexRoute: (req,res)=>{
        res.render("index/index");
    },
    displayArticles:(req,res)=>{
         scraper.scraper().then(data=>{
            res.render("index/index", {
                articles: data
            });
         });     
    }
};

