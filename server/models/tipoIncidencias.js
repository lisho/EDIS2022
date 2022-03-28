module.exports = (sequelize, type) => {
    const TipoIncidencia = sequelize.define("tipoIncidencia", {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
  
      tipo: type.STRING,
      descripcion: type.STRING,
      claseIncidencia: type.STRING,
    });
  
    return TipoIncidencia;
  };
  