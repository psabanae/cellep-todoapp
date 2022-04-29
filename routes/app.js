const express = require('express');
const tasksController = require('../controllers/tasks.controller');


const router = express.Router();

router.get('/', tasksController.listarIndex);
router.get('/tarefa/:id', tasksController.listarUma);

router.get('/adicionar-tarefa', tasksController.getForm);
router.post('/tarefas/salvar-tarefa', tasksController.adicionarTarefa);

router.get('/edit/:id', tasksController.listarEdit);
router.post('/tarefas/atualizar-tarefa', tasksController.atualizarTarefa);

router.get('/del/:id', tasksController.deletarTarefa);

module.exports = router;