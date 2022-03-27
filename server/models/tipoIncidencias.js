module.exports = (sequelize, type) => {
    const TipoIncidencias = sequelize.define("tipoIncidencias", {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
  
      tipo: type.STRING,
      descripcion: type.STRING,
      claseIncidencia: type.STRING,
    });
  
    return TipoIncidencias;
  };
  