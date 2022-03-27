module.exports = (sequelize, type) => {
    const DiagnosticoInicial = sequelize.define("diagnosticoInicial", {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
  
      otrasPrestaciones: type.STRING,
      totalIngresos: type.STRING,
      endeudamiento: type.STRING,
    });
  
    return DiagnosticoInicial;
  };
  