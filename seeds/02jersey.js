exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex.raw('DELETE FROM jersey; ALTER SEQUENCE jersey_id_seq RESTART WITH 6')
        .then(() => {
            const jerseys = [{
                id: 1,
                owner_id: 1,
                number: 23,
                athlete: 'Lebron James'
            }, {
                id: 2,
                owner_id: 2,
                number: 2,
                athlete: 'Kyrie Irving'
            }, {
                id: 3,
                owner_id: 1,
                number: 25,
                athlete: 'Mark Price'
            }, {
                id: 4,
                owner_id: 1,
                number: 11,
                athlete: 'Zydrunas Ilgauskas'
            }, {
                id: 5,
                owner_id: 1,
                number: 1,
                athlete: 'Anfrenee Hardaway'
            }]
            return knex('jersey').insert(jerseys);
        });
};
