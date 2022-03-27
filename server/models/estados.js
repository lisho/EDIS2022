module.exports = (sequelize, type) => {
    const Estados = sequelize.define("estados", {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
  
      descripcion: type.STRING,
    });
  
    return Estados;
  };
  