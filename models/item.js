module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Item', {
    name: { type: DataTypes.STRING, allowNull: false },
    description: DataTypes.TEXT,
    price: { type: DataTypes.DECIMAL(10,2), allowNull: false },
    quantity: { type: DataTypes.INTEGER, defaultValue: 0 },
  });
};
