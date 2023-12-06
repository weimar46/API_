const {response} = require('express')

Membresia = require('../models/membresia')

const getMembresia = async(req, res) => {
    const membresia = await Membresia.find(); //Obtener todos los dococumentos de una coleccion
    res.json({
        msg: membresia
    })
}

const postMembresia = async(req, res) => {
    const datos = req.body //Capturar datos de la URL-postman
    let mensaje = 'Insercion exitosa'
    try {
        const membresia = new Membresia(datos) //Instanciar el objeto
        await membresia.save()//Guardar en la base de datos  
        console.log(membresia) 
    } catch(error) {
        mensaje = error
        console.log(error)
    }

    res.json({
        msg: mensaje
    })
}


const putMembresia = async (req, res) => {
    const { idMembresia, nombreMembresia, precioMembresia, frecuenciaMembresia, fechaInicio, fechaFin, servicioMembresia, precioDolar } = req.body;
    let mensaje;

    try {
        const membresia = await Membresia.findOneAndUpdate(
            { idMembresia: idMembresia },
            {
                nombreMembresia: nombreMembresia,
                precioMembresia: precioMembresia,
                frecuenciaMembresia: frecuenciaMembresia,
                fechaInicio: fechaInicio, // Ajusta esto según tu lógica
                fechaFin: fechaFin,       // Ajusta esto según tu lógica
                servicioMembresia: servicioMembresia,
                precioDolar: precioDolar
            },
            { new: true }
        );

        if (membresia) {
            mensaje = 'Actualización exitosa';
        } else {
            mensaje = 'No se encontró la membresía con el ID proporcionado';
        }
    } catch (error) {
        console.error(error);
        mensaje = 'Error en la actualización';
    }

    res.json({
        msg: mensaje,
    });
};



const deleteMembresia = async(req, res) =>{
    const {idMembresia} = req.body //Desestructurar
    try {
        const membresia = await Membresia.findOneAndDelete({idMembresia: idMembresia})
            mensaje = 'Eliminacion exitosa'
    } catch(error) {
        mensaje = error
    }
    res.json({
        msg:mensaje
    })
    
}


module.exports = {
    getMembresia,
    postMembresia,
    putMembresia,
    deleteMembresia
}