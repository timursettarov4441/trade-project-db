module.exports = (db) => {
  // === GoodsGroup (1) -> (N) Goods ===
  db.goodsGroup.hasMany(db.goods, { 
    foreignKey: 'categoryId',
    as: 'goods'
  });
  db.goods.belongsTo(db.goodsGroup, { 
    foreignKey: 'categoryId',
    as: 'goodsGroup'
  });

  // === Customer (1) -> (N) Order ===
  db.customer.hasMany(db.order, { 
    foreignKey: 'customerId',
    as: 'orders'
  });
  db.order.belongsTo(db.customer, { 
    foreignKey: 'customerId',
    as: 'customer'
  });

  // === Order (1) -> (N) OrderItem ===
  db.order.hasMany(db.orderItem, { 
    foreignKey: 'orderId',
    as: 'orderItems'
  });
  db.orderItem.belongsTo(db.order, { 
    foreignKey: 'orderId',
    as: 'order'
  });

  // === Goods (1) -> (N) OrderItem ===
  db.goods.hasMany(db.orderItem, { 
    foreignKey: 'goodsId',
    as: 'orderItems'
  });
  db.orderItem.belongsTo(db.goods, { 
    foreignKey: 'goodsId',
    as: 'goods'
  });
};