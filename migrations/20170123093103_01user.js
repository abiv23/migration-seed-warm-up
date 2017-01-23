exports.up = function(knex, Promise) {
    return knex.schema.createTable('owner', (table) => {
        table.increments();
        table.text('email').unique();
        table.text('password').notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('owner');
};
