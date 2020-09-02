const createMongoClient = require('../shared/mongoClient');
const { MongoClient } = require('mongodb');

module.exports = async function (context, req) {

    const { client: MongoClient, closeConnectionFn } = await createMongoClient();
    const Products = MongoClient.collection('products');
    const res = await Products.find({});
    const body = await res.toArray();

    closeConnectionFn();

    context.res = {
        status: 200,
        body,
    }
};