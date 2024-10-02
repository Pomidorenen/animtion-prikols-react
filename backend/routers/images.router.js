const {Router} = require('express');
const router = new Router();
const controllers = require('../controllers/images.controller');

router.get('/', controllers.getImages);


module.exports = router;