const express = require('express');
const controller = require('../controllers/index');


const router = express.Router();  

router.get('/', controller.getHome);
router.get('/about', controller.getAbout);
router.get('/testing', controller.getTesting);

module.exports = router;