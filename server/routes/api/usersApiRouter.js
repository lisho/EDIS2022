const router = require('express').Router();

/** Traemos el modelo /modelos si necesitamos datos de otras tablas */

const { User, Tecnico } = require('../../db/db')

/** Generamos las rutas */

router.get('/',async (req, res) => {
    const data = await User.findAll( {include: Tecnico} );
    res.json(data);
})

router.post('/', async (req, res) => {
    const data = await User.create(req.body);
    res.json(data);
})

router.put('/:id', async (req, res) =>{

    await User.update(req.body, {
        where: {id: req.params.id}
    });

    const data = await User.findByPk(req.body.id);
    res.json(data);
})

router.delete('/:id', async (req, res) =>{
    await User.destroy({
        where: {id: req.params.id}
    });
    const data = await User.findAll();
    res.json(data);
})

module.exports = router;