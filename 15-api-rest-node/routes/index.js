const express = require('express');
const controller = require('../controllers/index');


const router = express.Router();  

router.get('/', controller.getHome);
router.get('/about', controller.getAbout);

module.exports = router;