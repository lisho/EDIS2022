module.exports = (sequelize, type) => {

    const Caso = sequelize.define("caso", {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
       
        domicilio: type.STRING,
        fechaDerivacion: type.DATE,
        fechaCanalizacion: type.DATE,
        fechaCierre: type.DATE,
        
    })
   
    return Caso
}