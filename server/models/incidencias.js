module.exports = (sequelize, type) => {
    const Incidencias = sequelize.define("Incidencias", {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
  
      nombre: type.STRING,
      telefomo: type.STRING,
      email: type.STRING,
    });
  
    return Incidencias;
  };
  