const validator = require('validator');
const ArticleModel = require('../models/articles');

exports.getTest = (req, res) => {
    console.log("Test")
    return res.status(200).json({
        message: "I'm a test message"
    });
}

exports.postSaveArticle = async (req, res) => {
    // Get all data from the request body
    console.log(req.body);
    const { title, content, image } = req.body;
    // Validate the data
    try {
        let validateTitle = !validator.isEmpty(title) &&
            validator.isLength(title, { min: 5, max: 100 });
        let validateContent = !validator.isEmpty(content);
        let validateImage = !validator.isEmpty(image);

        if (!validateTitle || !validateContent || !validateImage) {
            throw new Error("Validation failed");
        }
    }
    catch (err) {
        console.log(err);
        return res.status(400).json({
            status: "error",
            message: "Data is missing"
        });
    }
    // Create a new article object
    const article = new ArticleModel(req.body);
    // Assign the data to the article object

    // Save the article object to the database
    try {
        const articleSaved = await article.save();
        return res.status(200).json({
            message: "Article saved",
            articleCreated: articleSaved
        });
    } catch (error) {
        return res.status(400).json({
            status: "error",
            message: "There was an error saving the article",
        });
    }
}