
exports.up = function(knex) {
    return knex.schema.createTable('resource_project', tbl => {
        tbl.increments();
        tbl.integer('project_id').unsigned();
        tbl.foreign('project_id').references('Project.id_in_project');
        tbl.integer('resource_id').unsigned();
        tbl.foreign('resource_id').references('Resource.id_in_resource');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('resource_project');
};
