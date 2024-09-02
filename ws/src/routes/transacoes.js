const { addDespesa, getDespesa, deleteDespesa } = require('../controllers/despesa');
const { addRenda, getRendimentos, deleteRenda } = require('../controllers/renda');


const router = require('express').Router();

router.post('/add-renda', addRenda)
    .get('/rendimentos', getRendimentos)
    .delete('/delete-renda/:id', deleteRenda)
    .post('/add-despesa', addDespesa)
    .get('/despesas', getDespesa)
    .delete('/delete-despesa/:id', deleteDespesa)

module.exports = router;