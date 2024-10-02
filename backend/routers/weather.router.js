const {Router} = require('express');
const router = new Router();
const controllers = require('../controllers/weather.controller');

router.get('/', controllers.getWeather);


module.exports = router;