const RendaSchema = require('../models/renda');

exports.addRenda = async (req, res) => {
    const { titulo, quantia, categoria, descricao, data } = req.body;

    const renda = RendaSchema({
        titulo,
        quantia,
        categoria,
        descricao,
        data
    });

    try{
        //Validação
        if(!titulo || !categoria || !descricao || !data)
    }catch(error){

    }
}