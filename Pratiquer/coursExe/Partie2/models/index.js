const Task = require('./taskModel');
const List = require('./listModel');

// Relations bidirectionnelles
List.hasMany(Task, { foreignKey: 'listId', as: 'tasks' });
Task.belongsTo(List, { foreignKey: 'listId' });

module.exports = { List, Task };