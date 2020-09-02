/**
 * @file: mongoClient.js
 * @author: Paulo Alves
 * @description: responsável pela conexão com o banco de dados.
 * @version 1.0.1 (01/09/2020)
 */

const { MongoClient } = require('mongodb');
const config = {
    url: 'mongodb+srv://api:****************@cluster0.mz6zi.azure.mongodb.net/api?retryWrites=true&w=majority',
};

module.exports = () => new Promise((resolve, reject) => {
    MongoClient
        .connect(config.url, { useNewUrlParser: true }, (err, mongoConnection) =>
            err
                ? reject(err)
                : resolve({
                    client: mongoConnection.db(config.dbName),
                    closeConnectionFn: () => setTimeout(() => {
                        mongoConnection.close();
                    }, 1000),
                    mongoConnection,
                })
        );
});