const cfg = require('./../config/knex-cfg');
const knex = require('knex')(cfg.mysql);
//console.log("db",db);

const connectionRelease = async() => {
    await knex.destroy();
}

module.exports = {
    knex,
    connectionRelease
}
