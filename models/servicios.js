const {Schema, model} = require('mongoose')

const ServicioSchema = ({
    idSerivio:{
        type: Number,
        unique: true,
        required:[true, 'El id de la membresia  es necesaria']
    },

    nombreServicio: {
        type:String,
        required:[true, 'El nombre de la membresia es requerida'],
    },
    precioServicio: {
        type:String,
        required:[true, 'El precio de la membresia es requerida'],
    },
    frecuenciaServicio:{
        type:String,
        required:[true, 'La frecuencia de la membresia es requerida'],
    },

    fechaInicio:{
        type:String,
        required:[true, 'La fecha de inicio de la membresia es requeriad'],
    },

    fechaFin:{
        type:String,
        required:[true, 'La fecha fin de la membresia es requeriad'],
    },
  
})


module.exports = model('servicio', ServicioSchema)