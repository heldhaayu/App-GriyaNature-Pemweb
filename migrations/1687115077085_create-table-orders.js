exports.up = (pgm) => {
    pgm.createTable('orders', {
      orderid: {
        type: 'SERIAL',
        primaryKey: true,
      },
      username: {
        type: 'VARCHAR(50)',
        notNull: true,
      },
      address: {
        type: 'VARCHAR(50)',
        notNull: true,
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
      order_date: {
        type: 'TIMESTAMP',
        notNull: true,
        default: pgm.func('current_timestamp'),
      },
    });
  };
  
  exports.down = (pgm) => {
    pgm.dropTable('orders');
  };
  