const router = require('express').Router();

/** Traemos el modelo /modelos si necesitamos datos de otras tablas */

const { User, Tecnico } = require('../../db/db')

/** Generamos las rutas */

router.get('/',async (req, res) => {
    const data = await User.findAll( {include: Tecnico} );
    res.json(data);
})

router.post('/registro', async (req, res) => {
    const nuevoRegistro = await User.create(req.body);
    const data = await User.findByPk(nuevoRegistro.id, {include: Tecnico});
    res.json(data);
})

router.put('/:id', async (req, res) =>{

    await User.update(req.body, {
        where: {id: req.params.id}
    });

    const data = await User.findAll( {include: Tecnico} );
    res.json(data);
})

router.delete('/:id', async (req, res) =>{
    await User.destroy({
        where: {id: req.params.id}
    });
    const data = await User.findAll( {include: Tecnico} );
    res.json(data);
})

module.exports = router;