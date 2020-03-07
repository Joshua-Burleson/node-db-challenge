const express = require('express');
const router = express.Router();
const taskRouter = require('./tasks');
const projects = require('../data/models/projectModel');
const { Exception, db } = require('../data/models/datautils');

router.use('/:id/tasks', taskRouter);

router.get('/', async (req, res) => {
    try {
        const allProjects = await projects.getAll();
        res.json(allProjects);
    }
    catch(exc) {
        const handledException = {code: 503, message: 'Something Went Wrong'}
        res.status(handledException.code).json(handledException);
    }

});

router.get('/:id', async (req, res) => {
    try {
        const project = await projects.getByKey(req.params.id);
        res.json(project);
    }
    catch(exc) {
        const handledException = {code: 503, message: 'Something Went Wrong'}
        res.status(handledException.code).json(handledException);
    }

});

router.get('/:id/verbose', async (req, res) => {
    try {
        const project = await projects.getByKey(req.params.id);
        const tasks = await db('task as t')
                              .where({'t.project_id': req.params.id})
                              .join('project as p', 'p.id', 't.project_id');

        const resources = await db('resource_project as rP')
                                  .where({'rP.project_id': req.params.id})
                                  .join('resource as r', 'r.id', 'rP.resource_id')
        
        const completeProject = { ...project, tasks, resources}

        res.json(completeProject);
    }
    catch(exc) {
        console.log(exc)
        const handledException = {code: 503, message: 'Something Went Wrong'}
        res.status(handledException.code).json(handledException);
    }
})






router.post('/', async (req, res) => {
    try {
        if(! req.body || !(req.body.project && req.body.project.name)) throw new Exception(400, 'Name is required');
        const newProject = await projects.insert(req.body.project);
        res.json(newProject);
    }
    catch(exc) {
        const handledException = {code: 503, message: 'Something Went Wrong'}
        console.log(handledException)
        res.status(handledException.code).json(handledException);
    }
});

module.exports = router;