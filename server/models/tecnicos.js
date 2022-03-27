module.exports = (sequelize, type) => {

    const Tecnico = sequelize.define("tecnico", {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
       
        nombre: type.STRING,
        categoria: type.STRING,
        denominacionT: type.STRING,
        email: type.STRING,
        telefono: type.STRING,
        equipoEdis: type.STRING,
    })
   
    return Tecnico
}