module.exports = (sequelize, Sequelize) => {
  const GoodsGroup = sequelize.define("goodsGroup", {
    goodsGroupId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'goodsGroupId'
    },
    name: {
      type: Sequelize.STRING,
      field: 'name'
    }
  });

  return GoodsGroup;
};