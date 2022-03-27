module.exports = (sequelize, type) => {
    const Documentos = sequelize.define("documentos", {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
  
      url: type.STRING,
      nombre: type.STRING,
      descripcion: type.STRING,
    });
  
    return Documentos;
  };
  