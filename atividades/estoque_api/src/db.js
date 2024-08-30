const Sequelize = require('sequelize');

/** Cria um objeto do tipo Sequelize.
 * Inicializa o objeto com parâmetros para conexão com 
 * o DB Sqlite3.
 */
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

module.exports = sequelize;