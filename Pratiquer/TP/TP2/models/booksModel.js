const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/db');

const Book = sequelize.define('Book', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    author: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    isbn: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    publication_year: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
});

module.exports = Book;
