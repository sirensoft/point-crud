var mysql = require('mysql')
var turf = require('@turf/turf')
var knex = require('knex')({
    client: 'mysql',
    connection: require('../config/db')
})

class Point {
    create(data) {
        return knex('point').insert(data);
    }
    update(id, data) {
        return knex('point').where({ id: id }).update(data)
    }
    delete(id) {
        return knex('point').where({ id: id }).del();
    }

    async findAll() {
        let raw = await knex.select('*').from('point')
        var features = [];
        raw.forEach((rows) => {
            features.push(turf.point([rows.lon * 1, rows.lat * 1], { id: rows.id, note: rows.note }))
        });
        return features
    }
}

module.exports = Point;