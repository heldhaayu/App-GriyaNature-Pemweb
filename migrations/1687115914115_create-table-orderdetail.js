exports.up = (pgm) => {
    pgm.createTable('orderdetail', {
        orderdetailid: {
            type: 'SERIAL',
            notNull: true,
            primarykey:true,
          },
        orderid: {
        type: 'INTEGER',
        notNull: true,
        references: 'orders',
        onDelete: 'CASCADE',
      },
      product_id: {
        type: 'INTEGER',
        notNull: true,
        references: 'products',
        onDelete: 'CASCADE',
      },
      price: {
        type: 'VARCHAR(50)',
        notNull: true,
      },
      quantity: {
        type: 'VARCHAR(50)',
        notNull: true,
      },
      total: {
        type: 'VARCHAR(50)',
        notNull: true,
      },
    });
  };
  
  exports.down = (pgm) => {
    pgm.dropTable('orderdetail');
  };
  