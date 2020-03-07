const express = require('express');
const router = express.Router();
const projects = require('../data/models/projectModel');
const { Exception } = require('../data/models/datautils');

router.get('/', async (req, res) => {
    try {
        const allProjects = await projects.getAll();
        res.json(allProjects);
    }
    catch(exc) {
        const handledException = exc.code ? exc : {code: 503, message: 'Something Went Wrong'}
        res.status(handledException.code).json(handledException);
    }

});

router.post('/', async (req, res) => {
    try {
        if(! req.body || !(req.body.project && req.body.project.name)) throw new Exception(400, 'Name is required');
        const newProject = await projects.insert(req.body.project);
        res.json(newProject);
    }
    catch(exc) {
        const handledException = exc.code ? exc : {code: 503, message: 'Something Went Wrong'}
        console.log(handledException)
        res.status(handledException.code).json(handledException);
    }
});

module.exports = router;