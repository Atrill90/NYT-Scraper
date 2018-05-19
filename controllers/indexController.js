const mongoose = require("mongoose");

module.exports = {
    // get index route view
    getIndexRoute: (req,res)=>{
        res.render("index/index");
    }
};