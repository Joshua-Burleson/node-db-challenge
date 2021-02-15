const express = require('express');
const router = express.Router();
const resources = require('../data/models/resourceModel');
const { Exception } = require('../data/models/datautils');

router.get('/', async (req, res) => {
    try {
        const allResources = await resources.getAll();
        res.json(allResources);
    }
    catch(exc) {
        const handledException = {code: 503, message: 'Something Went Wrong'}
        res.status(handledException.code).json(handledException);
    }
});

router.post('/', async (req, res) => {
    try {
        if(! req.body || !(req.body.resource && req.body.resource.name)) throw new Exception(400, 'Name is required');
        const newResource = await resources.insert(req.body.resource);
        res.json(newResource);
    }
    catch(exc) {
        const handledException = {code: 503, message: 'Something Went Wrong'}
        res.status(handledException.code).json(handledException);
    }
});

module.exports = router;