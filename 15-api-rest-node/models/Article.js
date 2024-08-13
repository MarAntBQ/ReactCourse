// Create article model with mongoose
const { Schema, model} = require('mongoose'); // Import Schema and model from mongoose

const ArticleSchema = Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    image: {
        type: String,
        default: "default.png",
        required: true
    }
});


module.exports = model('Article', ArticleSchema, 'articles');
 //  "Name of the collection" by default it is underscore and add s | Schema name | Collection name (If you want to change the name of the collection) |
