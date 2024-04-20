const Sequelize = require('sequelize');
require('dotenv').config();

/*const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  //"postgres",
  //process.env.DB_PASSWORD,
  "fossil69",
  {
    host: 'localhost',
    dialect: 'postgres'
  }
);

module.exports = sequelize;*/

let sequelize;

if (process.env.DB_URL) {
  sequelize = new Sequelize(process.env.DB_URL);
} else {
  console.log("HERE IN CONNECTION.JS");
  sequelize = new Sequelize(
    'ecommerce_db',
    //process.env.DB_USER,
    'postgres',
    //process.env.DB_PASSWORD,
    'fossil69',
    {
      host: 'localhost',
      dialect: 'postgres'
    }
  );
}

module.exports = sequelize;
