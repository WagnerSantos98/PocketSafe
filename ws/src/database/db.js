const mongoose = require('mongoose');

const db = async () => {
    try{
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URL)

        console.log('DB Conectado')
    }catch(error){
        console.log('DB Erro na Conexão');
    }
}

module.exports = {db};