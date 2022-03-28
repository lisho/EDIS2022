module.exports = (sequelize, type) => {
    const Participante = sequelize.define("participante", {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
  
      nombre: type.STRING,
      apellidos: type.STRING,
      dni: type.STRING,
      sexo: type.STRING,
      estadoCivil: type.STRING,
      nacimiento: type.DATE,
      telefomo: type.STRING,
      email: type.STRING,
    });
  
    return Participante;
  };
  