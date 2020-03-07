
exports.up = function(knex) {
    return knex.schema.createTable('task', tbl => {
        tbl.increments();
        tbl.text('description').notNullable();
        tbl.text('notes');
        tbl.boolean('completed').notNullable().defaultTo(false);
        tbl.integer('project_id').unsigned().notNullable();
        tbl.foreign('project_id').references('Project.id_in_project');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('task');
};
