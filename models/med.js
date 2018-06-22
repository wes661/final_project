module.exports = function(sequelize, Sequelize) {
  const Med = sequelize.define("med", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },

    name: {
      type: Sequelize.STRING,
      notEmpty: true
    }
  });

  Med.associate = function(models) {
    Med.belongsTo(models.user, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Med;
};
