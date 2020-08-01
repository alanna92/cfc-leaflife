const config = {
    "type": "postgres",
    "host": "hanno.db.elephantsql.com",
    "port": 5432,
    "username": "agrayghq",
    "password": "65cUybuAzrKW3eaIaIo9wA8oP1B8oygR",
    "database": "agrayghq",
    "synchronize": true,
    "logging": false
};

const distConfig = {
    ...config,
    "entities": [
        __dirname + "/dist/server/entity/**/*.js"
    ],
    "migrations": [
        __dirname + "/dist/server/migration/**/*.js"
    ]
};

const srcConfig = {
    ...config,
    "entities": [
        "server/entity/**/*.ts"
    ],
    "migrations": [
        "server/migration/**/*.ts"
    ]
};

const isTsNode = process.env.DEV_MODE;

console.log("isTsNode", isTsNode ? srcConfig : distConfig);
console.log(__dirname);

module.exports = isTsNode ? srcConfig : distConfig;