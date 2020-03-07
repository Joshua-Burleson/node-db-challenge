const knex = require('knex');
const { DataTable, db } = require('./datautils');

const resources = new DataTable('resource');

module.exports = resources;