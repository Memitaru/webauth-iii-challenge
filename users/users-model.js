const db = require('../database/dbConfig.js');

module.exports = {
    add,
    get,
    getBy,
    getById
}

function add(user){
    return db('users')
        .insert(user, 'id')
        .then(ids => {
            const [id] = ids;
            return getById(id)
        })
}

function getById(id){
    return db('users')
    .where({id})
    .first()
}

function get(){
    return db('users')
    .select('id', 'username', 'password', 'department')
}

function getBy(filter){
    return db('users').where(filter)
}