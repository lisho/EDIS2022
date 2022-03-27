const { Sequelize } = require("sequelize");
const { applyExtraSetup } = require("./asociacionesDeModelos");

/* Traemos los modelos (modelo = tabla) */

const UserModel = require("../models/users");
const TecnicoModel = require("../models/tecnicos");
const AsignacionModel = require("../models/asignaciones");
const CasoModel = require("../models/casos");
const TsCeasModel = require("../models/tsCeas");
const ParticipanteModel = require("../models/participantes");
const ParticipacionModel = require("../models/participaciones");
const IncidenciaModel = require("../models/incidencias");
const EstadoModel = require("../models/estados");
const DocumentoModel = require("../models/documentos");
const TipoIncidenciaModel = require("../models/tipoIncidencias");
const CeasModel = require("../models/ceas");
const CanalizacionModel = require("../models/canalizaciones");
const DiagnosticoInicialModel = require("../models/diagnosticoInicial");



/* Creamos la base de datos
    Parametros de Sequalize: nombre de la bd, usuario, contraseña y un objeto con:
    - host, 
    - dialect (mariadb)
*/
const sequelize = new Sequelize("edis_data", "lisho", "toor", {
  host: "db",
  dialect: "mariadb",
});

/* Creamos las tablas */

const User = UserModel(sequelize, Sequelize);
const Tecnico = TecnicoModel(sequelize, Sequelize);
const Asignacion = AsignacionModel(sequelize, Sequelize);
const Caso = CasoModel(sequelize, Sequelize);
const TsCeas = TsCeasModel(sequelize, Sequelize);
const Participante = ParticipanteModel(sequelize, Sequelize);
const Participacion = ParticipacionModel(sequelize, Sequelize);
const Incidencia = IncidenciaModel(sequelize, Sequelize);
const Estado = EstadoModel(sequelize, Sequelize);
const Documento = DocumentoModel(sequelize, Sequelize);
const TipoIncidencia = TipoIncidenciaModel(sequelize, Sequelize);
const Ceas = CeasModel(sequelize, Sequelize);
const Canalizacion = CanalizacionModel(sequelize, Sequelize);
const DiagnosticoInicial = DiagnosticoInicialModel(sequelize, Sequelize);

/* Establecemos las relaciones entre las tablas */

applyExtraSetup(sequelize);

/* Sincronizamos las tablas con la base de datos (y devuelve una promesa)*/

sequelize.sync({ force: false }).then(() => {
  console.log("Tablas sincronizadas");
});

/* Exportamos los objetos que vamos a necesitar */

module.exports = {
  sequelize,
  User,
  Asignacion,
  Tecnico,
  Caso,
  TsCeas,
  Participante,
  Participacion,
  Incidencia,
  Estado,
  Documento,
  TipoIncidencia,
  Ceas,
  Canalizacion,
  DiagnosticoInicial,
  
};
