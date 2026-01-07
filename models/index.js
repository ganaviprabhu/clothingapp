// models/index.js
const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

// Create Sequelize instance
const sequelize = new Sequelize(
  process.env.DB_NAME,     // e.g. 'inventory_db'
  process.env.DB_USER,     // e.g. 'postgres'
  process.env.DB_PASSWORD, // your password
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
  }
);

// Import models
const Category = require('./category')(sequelize, DataTypes);
const Item = require('./item')(sequelize, DataTypes);

// Associations
Category.hasMany(Item, { foreignKey: 'categoryId', onDelete: 'SET NULL' });
Item.belongsTo(Category, { foreignKey: 'categoryId' });

// Export everything
module.exports = {
  sequelize,
  Sequelize,
  Category,
  Item,
};
