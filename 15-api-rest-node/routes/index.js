const express = require('express');
const indexController = require('../controllers/index');


const router = express.Router();  

router.get('/', indexController.getHome);
router.get('/about', indexController.getAbout);
router.get('/testing', indexController.getTesting);

module.exports = router;