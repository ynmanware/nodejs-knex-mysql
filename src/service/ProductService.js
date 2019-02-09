const {knex} = require('./KnexService');

const get = async () => {
    return await knex("products").limit(10);
};

const insert = async (product) => {
    return await knex("products").insert(product);
};

const del = async (productId) => {
    return knex("products").where("productID", "=", productId).delete();
};

const update = async (productId, payload) => {
    return await knex("products").where("productID", "=", productId).update(payload);
};

module.exports = {
    get,
    insert,
    del,
    update
}
