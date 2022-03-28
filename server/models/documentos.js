module.exports = (sequelize, type) => {
    const Documento = sequelize.define("documento", {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
  
      url: type.STRING,
      nombre: type.STRING,
      descripcion: type.STRING,
    });
  
    return Documento;
  };
  