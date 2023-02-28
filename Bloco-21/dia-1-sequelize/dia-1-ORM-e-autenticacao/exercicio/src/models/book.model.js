'use strict';
const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const books = sequelize.define('Book', {
        title: DataTypes.STRING,
        author: DataTypes.STRING,
        pageQuantity: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    });
    return books;
};
