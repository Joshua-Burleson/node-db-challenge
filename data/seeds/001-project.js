
exports.seed = function(knex) {
  // Deletes ALL existing project entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {name: 'Take over the world', description: 'Take it over!', completed: false},
        {name: 'Burn down the world', description: 'Burn it down!', completed: false},
        {name: 'Kill this sprint challenge', description: 'Murk it!', completed: true}
      ]);
    });
};
