exports.up = function(knex, Promise) {
    return knex.schema.createTable('jersey', (table) => {
        table.increments();
        table.integer('owner_id').unsigned().references('id').inTable('owner').onDelete('cascade');
        table.integer('number');
        table.text('athlete');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('jersey')
};
