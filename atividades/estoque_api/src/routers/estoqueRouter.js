const express = require('express');
const router = express.Router();

const estoqueController = require('../controllers/estoqueController');

/** Associa uma rota a uma função da controller */
router.get('/api/produtos', estoqueController.getProdutos);
router.get('/api/produtos/:id', estoqueController.getProdutoId);
router.post('/api/produto/cadastrar', estoqueController.postCadastrarProduto);
router.post('/api/produto/atualizar', estoqueController.postAtualizarProduto);
router.post('/api/produto/excluir', estoqueController.postExcluirProduto);

module.exports = router;