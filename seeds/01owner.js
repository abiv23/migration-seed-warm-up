var bcrypt = require('bcrypt');

exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex.raw('DELETE FROM owner; ALTER SEQUENCE owner_id_seq RESTART WITH 3')
        .then(() => {
            const salt = bcrypt.genSaltSync(10);
            const owners = [{
                id: 1,
                email: 'abiv@gmail.com',
                password: bcrypt.hashSync('salthash', salt)
            }, {
                id: 2,
                email: 'baiv@gmail.colName',
                password: bcrypt.hashSync('hashsalt', salt)
            }]
            return knex('owner').insert(owners);
        });
};
