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
        if(!titulo || !categoria || !descricao || !data){
            return res.status(400).json({error: 'Todos os campos são obrigatórios'});
        }
        if(quantia <= 0 || !quantia === 'number'){
            return res.status(400).json({error: 'A quantia deve ser um número positivo'});
        }

        await renda.save();
        res.status(201).json({msg: 'Renda adicionada com sucesso'});
    }catch(error){
        res.status(500).json({error: 'Ocorreu um erro interno'});
    }
}

exports.getRendimentos = async (req, res) => {
    try{   
        const rendimentos = await  RendaSchema.find().sort({createdAt: -1})
        res.status(200).json(rendimentos);
    }catch(error){
        res.status(500).json({msg: 'Falha ao buscar renda'});
    }
}

exports.deleteRenda = async (req, res) => {
    try{
        const {id} = req.params;
        RendaSchema.findByIdAndDelete(id)
            .then((renda) => {
                res.status(200).json({msg: 'Renda excluída com sucesso'});
            })
    }catch(error){
        res.status(500).json({msg: 'Falha ao excluir renda'});
    }
}