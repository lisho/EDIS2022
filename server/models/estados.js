module.exports = (sequelize, type) => {
    const Estado = sequelize.define("estado", {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
  
      descripcion: type.STRING,
    });
  
    return Estado;
  };
  