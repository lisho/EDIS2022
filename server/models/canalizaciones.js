module.exports = (sequelize, type) => {
    const Canalizacion = sequelize.define("canalizacion", {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      
      fechaPropuesta: type.DATE,
      numHS: type.INTEGER,
      conciencia: type.STRING,
      motivacion: type.STRING,
      riesgo: type.STRING,
      cuidador: type.STRING,
      conciliacion: type.STRING,
      otraDisponibilidad: type.STRING,
      
    });
  
    return Canalizacion;
  };
  