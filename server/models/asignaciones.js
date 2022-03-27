module.exports = (sequelize, type) => {

    const Asignacion = sequelize.define("asignacion", {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        observaciones: type.STRING,
       
    })
   
    return Asignacion
}