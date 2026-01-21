const Task = require('./taskModel');
const List = require('./listModel');
const User = require('./user');

// Relations bidirectionnelles
List.hasMany(Task, { foreignKey: 'listId', as: 'tasks' });
Task.belongsTo(List, { foreignKey: 'listId' });

module.exports = { List, Task, User };