exports.up = (pgm) => {
    pgm.createTable('users', {
      id: 'id',
      name: { type: 'varchar(100)', notNull: true },
      username: { type: 'varchar(100)', notNull: true, unique: true },
      email: { type: 'varchar(100)', notNull: true },
      nomortelpon: { type: 'varchar(100)', notNull: true },
      password: { type: 'varchar(255)', notNull: true },
      address: { type: 'varchar(100)', notNull: true },
      url: { type: 'varchar(100)' },
      created_at: {
        type: 'timestamp',
        notNull: true,
        default: pgm.func('current_timestamp'),
      },
    });
  };
  
  exports.down = (pgm) => {
    pgm.dropTable('users');
  };
  