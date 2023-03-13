module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    city: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
    employeeId: { type: DataTypes.INTEGER, foreignKey: true },
    // A declaração da Foreign Key é opcional no model
  },
  {
    timestamps: false,
    tableName: 'addresses',
    underscored: true, // transformar camelCase para snake_case
  });

  Address.associate = (models) => {
  // define o tipo de relacionamento
    Address.belongsTo(models.Employee, // belongsToMany que pertence a varios
    // define qual a foreign key a ser criada
      { foreignKey: 'employeeId', as: 'employees' });
  };

  return Address;
};