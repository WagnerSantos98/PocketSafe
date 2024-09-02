const DespesaSchema = require('../models/despesa');

exports.addDespesa = async (req, res) => {
    const { titulo, quantia, categoria, descricao, data } = req.body;

    const renda = DespesaSchema({
        titulo,
        quantia,
        categoria,
        descricao,
        data
    });

    try{
        //Validação
        if(!titulo || !quantia || !categoria || !descricao || !data){
            return res.status(400).json({msg: 'Todos os campos são obrigatórios'});
        }
        if(quantia <= 0 || !quantia === 'number'){
            return res.status(400).json({msg: 'A quantia deve ser um número positivo'});
        }

        await renda.save();
        res.status(200).json({msg: 'Despesa adicionada com sucesso'});
    }catch(error){
        res.status(500).json({msg: 'Falha ao adicionar despesa'});
    }
}

exports.getDespesa = async (req, res) => {
    try{   
        const rendimentos = await  DespesaSchema.find().sort({ createdAt: -1 })
        res.status(200).json(rendimentos);
    }catch(error){
        res.status(500).json({msg: 'Falha ao buscar despesas'});
    }
}

exports.deleteDespesa = async (req, res) => {
    try{
        const {id} = req.params;
        DespesaSchema.findByIdAndDelete(id)
            .then((renda) => {
                res.status(200).json({msg: 'Despesa excluída com sucesso'});
            })
    }catch(error){
        res.status(500).json({msg: 'Falha ao excluir despesa'});
    }
}