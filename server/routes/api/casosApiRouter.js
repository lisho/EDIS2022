const router = require('express').Router();

/** Traemos el modelo /modelos si necesitamos datos de otras tablas */

const { Caso, Etiqueta } = require('../../db/db')

/** Generamos las rutas */

router.get('/',async (req, res) => {
    const tipo = await Caso.findAll({include: Etiqueta});
    res.json(tipo);
})

router.post('/', async (req, res) => {
    const tipo = await Caso.create(req.body);
    res.json(tipo);
})

router.put('/:id', async (req, res) =>{

    await Caso.update(req.body, {
        where: {id: req.params.id}
    });

    const tipos = await Caso.findByPk(req.body.id);
    res.json(tipos);
})

router.delete('/:id', async (req, res) =>{
    await Caso.destroy({
        where: {id: req.params.id}
    });
    const tipos = await Caso.findAll();
    res.json(tipos);
})

module.exports = router;