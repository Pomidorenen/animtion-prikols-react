const {Router} = require('express');
const router = new Router();
const controllers = require('../controllers/notes.controller');

router.get('/', controllers.getNotes);
router.post('/',controllers.addNotes);

module.exports = router;