const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodesquelize2', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

try {
    sequelize.authenticate();
    console.log('Connection com sucesso com sequelize!');
} catch (error) {
    console.log('Falha ao conectar: ' + error);
}

module.exports = sequelize;