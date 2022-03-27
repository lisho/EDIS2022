module.exports = (sequelize, type) => {
    const TsCeas = sequelize.define("tsCeas", {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
  
      prestacion: type.STRING,
      telefomo: type.STRING,
      email: type.STRING,
    });
  
    return TsCeas;
  };
  