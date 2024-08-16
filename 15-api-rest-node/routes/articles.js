const express = require('express');
const router = express.Router();
const ArticleController = require('../controllers/articles');


// Test Route
router.get('/test', ArticleController.getTest);

module.exports = router;