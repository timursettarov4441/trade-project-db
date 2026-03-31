module.exports = (sequelize, Sequelize) => {
  const Customer = sequelize.define("customer", {
    customerId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'customerId'
    },
    email: {
      type: Sequelize.STRING,
      field: 'email'
    },
    phone: {
      type: Sequelize.STRING,
      field: 'phone'
    },
    name: {
      type: Sequelize.STRING,
      field: 'name'
    },
    deliveryAddress: {
      type: Sequelize.STRING,
      field: 'deliveryAddress'
    }
  });

  return Customer;
};