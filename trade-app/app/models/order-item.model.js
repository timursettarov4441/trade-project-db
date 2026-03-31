module.exports = (sequelize, Sequelize) => {
  const OrderItem = sequelize.define("orderItem", {
    orderItemId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'orderItemId'
    },
    goodsId: {
      type: Sequelize.INTEGER,
      field: 'goodsId'
    },
    orderId: {
      type: Sequelize.INTEGER,
      field: 'orderId'
    },
    quantity: {
      type: Sequelize.INTEGER,
      field: 'quantity'
    },
    priceAtPurchase: {
      type: Sequelize.INTEGER,
      field: 'priceAtPurchase'
    }
  });

  return OrderItem;
};