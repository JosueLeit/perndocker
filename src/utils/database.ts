import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('printerdatabase', 'printeruser', 'printermypassword', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
});

export default sequelize;