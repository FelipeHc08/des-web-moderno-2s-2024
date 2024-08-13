const express = require('express');
const app = express();
const indexRouter = require('./src/routers/indexRouters');
app.get('/', (req, res) =>{
    res.send('<h1>CLUBE DE REGATAS DO FLAMENGO</h1>')
})

app.use('/', indexRouter);

const PORT = 8080;
app.listen(PORT, () => {
    console.log('app rodando na porta ' + PORT);
});