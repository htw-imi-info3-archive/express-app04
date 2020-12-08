var express = require('express');
var router = express.Router();
const todosController = require('../controllers/todosController')
const pomodoriController = require('../controllers/pomodoriController')

router.get('/todos/:id/done', todosController.apiDone);
router.get('/todos/:id/reset', todosController.apiReset );


router.get('/todos/:id/pomodoro/start', pomodoriController.start );
router.get('/todos/:id/pomodoro/reset', pomodoriController.reset );
router.get('/todos/:id/pomodoro/finish', pomodoriController.finish );
module.exports = router;
