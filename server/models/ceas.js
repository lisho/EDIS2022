module.exports = (sequelize, type) => {
    const Ceas = sequelize.define("ceas", {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
  
      nombre: type.STRING,
      descripcion: type.STRING,
    });
  
    return Ceas;
  };
  