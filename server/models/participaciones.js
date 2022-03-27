module.exports = (sequelize, type) => {
    const Participaciones = sequelize.define("participaciones", {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
  
      rol: type.STRING,
      
    });
  
    return Participaciones;
  };
  