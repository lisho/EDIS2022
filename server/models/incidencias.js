module.exports = (sequelize, type) => {
    const Incidencia = sequelize.define("incidencia", {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
  
      nombre: type.STRING,
      telefomo: type.STRING,
      email: type.STRING,
    });
  
    return Incidencia;
  };
  