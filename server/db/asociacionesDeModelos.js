function applyExtraSetup(sequelize) {
  console.log(sequelize.models);
  const {
    user,
    tecnico,
    caso,
    asignacion,
    ceas,
    tsCeas,
    participante,
    participacion,
    incidencia,
    estado,
    documento,
    tipoIncidencia,
    canalizacion,
    diagnosticoInicial,
  } = sequelize.models;

  tecnico.hasMany(user);
  user.belongsTo(tecnico);

  tecnico.hasMany(incidencia);
  incidencia.belongsTo(tecnico);

  ceas.hasMany(tsCeas);
  tsCeas.belongsTo(ceas);

  tipoIncidencia.hasMany(incidencia);
  incidencia.belongsTo(tipoIncidencia);

  caso.hasMany(incidencia);
  incidencia.belongsTo(caso);

  incidencia.hasMany(documento);
  documento.belongsTo(incidencia);

  estado.hasMany(caso);
  caso.belongsTo(estado);

  tsCeas.hasMany(caso);
  caso.belongsTo(tsCeas);

  caso.hasOne(canalizacion);

  tecnico.belongsToMany(caso, { through: asignacion });
  caso.belongsToMany(tecnico, { through: asignacion });

  participante.belongsToMany(caso, { through: participacion });
  caso.belongsToMany(participante, { through: participacion });
}

module.exports = { applyExtraSetup };
