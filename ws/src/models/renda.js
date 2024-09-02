const mongoose = require('mongoose');

const RendaSchema = new mongoose.Schema({
    titulo:{
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    quantia:{
        type: Number,
        required: true,
        trim: true,
        maxLength: 20
    },
    tipo:{
        type: String,
        default:"renda"
    },
    data:{
        type: Date,
        required: true,
        trim: true
    },
    categoria:{
        type: String,
        required: true,
        trim: true,
    },
    descricao:{
        type: String,
        trim: true,
        maxLength: 20
    }
}, {timestamps: true});

module.exports = mongoose.model('Renda', RendaSchema);