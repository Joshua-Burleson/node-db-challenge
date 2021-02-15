
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        {name: 'Axe'},
        {name: 'Lighter'},
        {name: 'Computer', description: 'Helpful for everything'},
      ]);
    });
};
