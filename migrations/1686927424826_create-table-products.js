exports.up = (pgm) => {
    pgm.createTable('products', {
      id: {
        type: 'SERIAL',
        primaryKey: true,
        
      },
      productname: {
        type: 'VARCHAR(100)',
        notNull: true,
        unique: true,
      },
      hargabeli: {
        type: 'INTEGER',
        notNull: true,
      },
      hargajual: {
        type: 'INTEGER',
        notNull: true,
      },
      category: {
        type: 'VARCHAR(50)',
        notNull: true,
      },
      panjang: {
        type: 'INTEGER',
        notNull: true,
      },
      lebar: {
        type: 'INTEGER',
        notNull: true,
      },
      tinggi: {
        type: 'INTEGER',
        notNull: true,
      },
      berat: {
        type: 'INTEGER',
        notNull: true,
      },
      bahan: {
        type: 'VARCHAR(50)',
        notNull: true,
      },
      stok: {
        type: 'INTEGER',
        notNull: true,
      },
      deskripsi: {
        type: 'TEXT',
        notNull: true,
      },
      shoppelink:{
        type: 'VARCHAR(50)',
        default:'update your link'
      },
      lazadalink:{
        type: 'VARCHAR(50)',
        default:'update your link'
      },
      tiktokshoplink:{
        type: 'VARCHAR(50)',
        default:'update your link'
      },
      tokpedlink:{
        type: 'VARCHAR(50)',
        default:'update your link'
      },
      isdelete: {
        type: 'BOOLEAN',
        default: false
      },
      url: {
        type: 'VARCHAR(50)',
        notNull: true,
      },
      date: {
        type: 'TIMESTAMP WITHOUT TIME ZONE',
        notNull: true,
        default: pgm.func('current_timestamp'),
      },
  

      
    });
  };
  
  exports.down = (pgm) => {
    pgm.dropTable('products');
  };
  