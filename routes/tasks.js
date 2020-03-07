const express = require('express');
const router = express.Router({mergeParams: true});
const tasks = require('../data/models/taskModel');
const { Exception } = require('../data/models/datautils');

router.get('/', async (req, res) => {
    try {
        const allTasks = await tasks.getTasksByProject(req.params.id);
        res.json(allTasks);
    }
    catch(exc) {
        console.log(exc)
        const handledException = {code: 503, message: 'Something Went Wrong'}
        res.status(handledException.code).json(handledException);
    }
});

router.post('/', async (req, res) => {
    try {
        if(! req.body || !(req.body.task && req.body.task.description)) throw new Exception(400, 'Description is required');
        const taskToInsert = {...req.body.task, project_id: req.params.id};
        const newTask = await tasks.insert(taskToInsert);
        res.json(newTask);
    }
    catch(exc) {
        const handledException = {code: 503, message: 'Something Went Wrong'}
        res.status(handledException.code).json(handledException);
    }
});

module.exports = router;