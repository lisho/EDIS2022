module.exports = (sequelize, type) => {
    const Participacion = sequelize.define("participacion", {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
  
      rol: type.STRING,
      
    });
  
    return Participacion;
  };
  