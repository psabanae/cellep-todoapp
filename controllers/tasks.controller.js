const db = require('../db/dbConnection');

const tasksController = {

    async listarIndex(req, res) {
        const getAllTasks = await db.query('SELECT * FROM tarefas ORDER BY id_tarefa DESC');
        res.render('home/index', {tasks: getAllTasks.rows, title:'Cellep Curso Backend'});
    },

    async listarUma(req, res) {
        const id = req.params.id;
        const getOneTask = await db.query (`SELECT * FROM tarefas WHERE id_tarefa=${id}`);
        res.render('tarefas/tarefa', { task: getOneTask.rows[0], title:`Tarefa: ${getOneTask.rows[0].tarefa}`});
    },

    async getForm(req, res) {
        const showForm = await res.render('tarefas/adicionar-tarefa', {title: 'Adicionar Nova Tarefa'});
    },

    async adicionarTarefa(req, res) {
        const { titulo, descricao } = req.body;
        await db.query('INSERT INTO tarefas (tarefa, descricao) VALUES ($1, $2)', [titulo, descricao], (err, result) => {
            res.redirect('/');
        })

    },

    async listarEdit(req, res) {
        const id = req.params.id;
        const getOneTask = await db.query (`SELECT * FROM tarefas WHERE id_tarefa=${id}`);
        res.render('tarefas/editar-tarefa', { task: getOneTask.rows[0], title:`Tarefa: ${getOneTask.rows[0].tarefa}`});
    },

    async atualizarTarefa(req, res) {
        const { titulo, descricao, id } = req.body;
        await db.query('UPDATE tarefas SET tarefa=$1, descricao=$2 WHERE id_tarefa=$3', [titulo, descricao, id], (err, result) => {
            res.redirect('/');
        });

    },

    async deletarTarefa(req, res) {
        const id = req.params.id;
        await db.query (`DELETE FROM tarefas WHERE id_tarefa=${id}`);
        res.redirect('/');
    }

};


module.exports = tasksController;