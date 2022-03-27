const router = require('express').Router();

/** Importamos los archivos de cada ruta */

const puertasApiRouter = require('./api/puertasApiRouter');

/* Importamos el archivo de middlewares */

const middlewares = require('./middlewares');

/** Redirigimos las rutas */

router.use('/puertas', /*  middlewares.checkToken , */ puertasApiRouter);



module.exports = router;