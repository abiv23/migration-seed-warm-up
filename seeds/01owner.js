exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex.raw('DELETE FROM owner; ALTER SEQUENCE owner_id_seq RESTART WITH 3')
        .then(() => {
            const owners = [{
                id: 1,
                email: 'abiv@gmail.com',
                password: 'salthash'
            }, {
                id: 2,
                email: 'baiv@gmail.colName',
                password: 'hashsalt'
            }]
            return knex('owner').insert(owners);
        });
};
