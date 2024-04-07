const config = require('../config/db');
const Sequelize =require('sequelize');

const datatype = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dailect: config.dialect
    }
);