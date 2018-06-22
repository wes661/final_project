module.exports = function(sequelize, Sequelize) {
  const Appointment = sequelize.define("appointment", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },

    name: {
      type: Sequelize.STRING,
      notEmpty: true
    },

    date: {
      type: Sequelize.DATE,
      notEmpty: true
    }
  });

  Appointment.associate = function(models) {
    Appointment.belongsTo(models.user, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Appointment;
};
