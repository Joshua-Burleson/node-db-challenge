
exports.up = function(knex) {
  return knex.schema.createTable('project', tbl => {
      tbl.increments();
      tbl.text('name').notNullable();
      tbl.text('description');
      tbl.boolean('completed').notNullable().defaultTo(false);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('project');
};
