const router = require('express').Router();

/** Importamos los archivos de cada ruta */

const casosApiRouter = require('./api/casosApiRouter');
const usersApiRouter = require('./api/usersApiRouter');
const tecnicosApiRouter = require('./api/tecnicosApiRouter');

/* Importamos el archivo de middlewares */

const middlewares = require('./middlewares');

/** Redirigimos las rutas */

router.use('/casos', /*  middlewares.checkToken , */ casosApiRouter);
router.use('/users', /*  middlewares.checkToken , */ usersApiRouter);
router.use('/tecnicos', /*  middlewares.checkToken , */ tecnicosApiRouter);
module.exports = router;