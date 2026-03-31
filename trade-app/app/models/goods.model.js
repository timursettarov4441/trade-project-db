module.exports = (sequelize, Sequelize) => {
  const Goods = sequelize.define("goods", {
    goodsId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'goodsId'
    },
    name: {
      type: Sequelize.STRING,
      field: 'name'
    },
    article: {
      type: Sequelize.STRING,
      field: 'article'
    },
    categoryId: {
      type: Sequelize.INTEGER,
      field: 'categoryId'
    },
    price: {
      type: Sequelize.INTEGER,
      field: 'price'
    },
    manufacturer: {
      type: Sequelize.STRING,
      field: 'manufacturer'
    },
    description: {
      type: Sequelize.STRING,
      field: 'description'
    }
  });

  return Goods;
};