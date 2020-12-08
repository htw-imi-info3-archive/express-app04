var express = require('express');
var router = express.Router();
const todosController = require('../controllers/todosController')

router.get('/', todosController.index);
router.get('/:id', todosController.show);

module.exports = router;
