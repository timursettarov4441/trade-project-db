module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define("order", {
    orderId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'orderId'
    },
    customerId: {
      type: Sequelize.INTEGER,
      field: 'customerId'
    },
    orderDate: {
      type: Sequelize.DATE,
      field: 'orderDate'
    },
    orderTime: {
      type: Sequelize.TIME,
      field: 'orderTime'
    },
    paymentTime: {
      type: Sequelize.TIME,
      field: 'paymentTime'
    },
    receiveTime: {
      type: Sequelize.TIME,
      field: 'receiveTime'
    },
    status: {
      type: Sequelize.STRING,
      field: 'status'
    },
    totalAmount: {
      type: Sequelize.INTEGER,
      field: 'totalAmount'
    }
  });

  return Order;
};