const knex = require('knex');
const { DataTable, db } = require('./datautils');

const projects = new DataTable('project');

module.exports = projects;