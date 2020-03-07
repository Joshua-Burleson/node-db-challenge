const knex = require('knex');
const { DataTable, db } = require('./datautils');

const tasks = new DataTable('task');

DataTable.prototype.getTasksByProject = function (project_id){
   return db('task as t')
        .where({'t.project_id': project_id})
        .join('project as p', 'p.id', 't.project_id')
}

module.exports = tasks;