const mongoose = require("mongoose");
const scraper = require("../scripts/scraper");

const db = require('../models');

module.exports = {
    // get index route view
    getIndexRoute: (req, res) => {
        res.render("index/index");
    },
    displayArticles: (req, res) => {
        scraper.scraper().then(data => {
            console.log(data);
            db.Article.create(data)
                .then(((dbArticle) => {
                    db.Article.find({"saved": false}).then(articles =>{
                       res.render("index/index", {
                        articles: articles
                    }); 
                    })
                   

                })).catch(err => {
                    console.log(err);
                    db.Article.find({"saved": false}).then(articles =>{
                        res.render("index/index", {
                         articles: articles
                     }); 
                     })
                })
        });
    },
    saveMe: (req, res) =>{
        let id = req.params.id;
        db.Article.findOneAndUpdate({_id:id}, {saved:true}).then(article =>{
            res.sendStatus(200);
        })

    },
    showMe:(req, res) =>{
        db.Article.find({"saved": true}).then(articles=>{
            res.render("savedArticles/saved",{
                articles:articles
            });
        });
    },
    deleteMe: (req, res) =>{
        db.Article.findOneAndUpdate({_id:id}, {saved:false}).then(article =>{
            res.sendStatus(200);
        })
    }
};