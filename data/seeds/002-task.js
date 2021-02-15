
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {description: 'task1', completed: false, project_id: 2},
        {description: 'task2', completed: false, notes: 'Ez PZ', project_id: 3},
        {description: 'task3', completed: true, project_id: 1},
      ]);
    });
};
