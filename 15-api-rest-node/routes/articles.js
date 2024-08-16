const express = require('express');
const router = express.Router();
const ArticleController = require('../controllers/articles');


// Test Route
router.get('/test', ArticleController.getTest);
router.post('/create', ArticleController.postSaveArticle);

module.exports = router;