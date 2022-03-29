const router = require('express').Router();

/** Traemos el modelo /modelos si necesitamos datos de otras tablas */

const { Tecnico, User } = require('../../db/db')

/** Generamos las rutas */

router.get('/',async (req, res) => {
    const data = await Tecnico.findAll( {include: User} );
    res.json(data);
})

router.post('/', async (req, res) => {
    const data = await Tecnico.create(req.body);
    res.json(data);
})

router.put('/:id', async (req, res) =>{

    await Tecnico.update(req.body, {
        where: {id: req.params.id}
    });

    const data = await Tecnico.findAll();
    res.json(data);
})

router.delete('/:id', async (req, res) =>{
    await Tecnico.destroy({
        where: {id: req.params.id}
    });
    const data = await Tecnico.findAll();
    res.json(data);
})

module.exports = router;