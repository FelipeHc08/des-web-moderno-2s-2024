const Produto = require('../models/produto');

async function getProdutos(req, res) {
    let produtos = await Produto.findAll();
    res.send(produtos);
}

async function getProdutoId(req, res) {
    let id = req.params.id;
    console.log('ID: ' + id);
    let produto = await Produto.findByPk(id); // SELECT * FROM produtos WHERE id = '{id}' 
    res.send(produto);
}

function postCadastrarProduto(req, res) {
    let produto = {
        nome: req.body.nome,
        quantidade: req.body.quantidade
    };
    Produto.create(produto).then(() => {
        res.send(true);
    }).catch((err) => {
        console.log(err);
        res.send(false);
    });
}

function postAtualizarProduto(req, res) {
    Produto.update(
        { quantidade: req.body.quantidade },
        {
            where: {
                id: req.body.id,
            },
        },
    ).then(() => {
        res.send(true);
    }).catch((err) => {
        console.log(err);
        res.send(false);
    });
}

function postExcluirProduto(req, res) {
    Produto.destroy(
        {
            where: {
                id: req.body.id,
            },
        },
    ).then(() => {
        res.send(true);
    }).catch((err) => {
        console.log(err);
        res.send(false);
    });
}

module.exports = {
    getProdutos,
    postCadastrarProduto,
    getProdutoId,
    postAtualizarProduto,
    postExcluirProduto
}