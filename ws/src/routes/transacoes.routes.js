const { addDespesa, getDespesa, deleteDespesa } = require('../contoller/despesa');
const { addRenda, getRendimentos, deleteRenda } = require('../contoller/renda');


const router = require('express').Router();

router.post('add-renda', addRenda)
    .get('/rendimentos', getRendimentos)
    .delete('/delete-renda/:id', deleteRenda);
    
router.post('/add-despesa', addDespesa)
    .get('/despesas', getDespesa)
    .delete('/delete-despesa/:id', deleteDespesa);

module.exports = router;