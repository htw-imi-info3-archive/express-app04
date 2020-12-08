var express = require('express');
var router = express.Router();
const todosController = require('../controllers/todosController')


router.get('/todos/:id/done', todosController.apiDone);
router.get('/todos/:id/reset', todosController.apiReset );

module.exports = router;
