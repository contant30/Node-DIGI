const { DataTypes } = require('sequelize');
const {sequelize} = require('../db/db');
const List = require('./listModel');

const Task = sequelize.define('Task', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    titre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date_debut: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    date_fin: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    done: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    listId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: List,
            key: 'id'
        }
    }
    }, 
    
    {
    tableName: 'tasks',
    timestamps: true
});


Task.belongsTo(List, {foreignKey: 'listId'});

module.exports = Task
