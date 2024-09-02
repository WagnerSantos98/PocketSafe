const express = require('express');
const cors = require('cors');
const { db } = require('./src/database/db');
const { readdirSync } = require('fs');

const app = express();

require('dotenv').config();

const PORT  = process.env.PORT;

//Middlewares
app.use(express.json());
app.use(cors());

//Routes
readdirSync('./src/routes').map((route) => app.use('/api/v1', require('./src/routes/' + route)));

//Conexão com Banco de Dados
const server = () => {
    db()
    app.listen(PORT, () => {
        console.log('Escutando na porta:', PORT);
    });
}

server();
