const knex = require('knex');
const { DataTable, db } = require('./datautils');

const tasks = new DataTable('task');

DataTable.prototype.getTasksByProject = function (project_id){
   return db('task as t')
        .select('p.name as Project_Name', 'p.description as Project_Description', 't.id', 't.description', 't.notes', 't.completed')
        .where({'t.project_id': project_id})
        .join('project as p', 'p.id', 't.project_id')
}

module.exports = tasks;