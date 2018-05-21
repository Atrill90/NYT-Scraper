const mongoose = require("mongoose");

// Save a reference to the Schema constructor
let Schema = mongoose.Schema;

let ArticleSchema = new Schema({
    title: {
        type:String,
        required:true,
        
    },
    link: {
        type:String,
        required: true
    },
    summary: {
        type:String,
        required: true
    },
    note: {
        type: Schema.Types.ObjectId,
        ref: "Note"
    },
    saved: {
        type: Boolean,
        required: true,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

let Article = mongoose.model("Article",ArticleSchema);

module.exports = Article;