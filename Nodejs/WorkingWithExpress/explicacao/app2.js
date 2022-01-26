const express = require('express');
const bodyParser = require('body-parser'); //npm i body-parser     servirá para analisar o body ddos requests. é boa pratica usar isso pq este body vem por padrao no express
//mas o time fica no vai e vem, tirando e botando no express. caso tirem novamente estará blindado com este pacote de terceiro

const app = express();

app.use(bodyParser.urlencoded({ extended: false })); //registra num middleware. aqui não analisará todos os tipos de corpos disponíveis, arquivos, json, mas analisará o corpo enviado por um formulario.
//para outros tipos usaremos outros analisadores 


app.use('/', (req, res, next) => {
    console.log('This always runs!');
    next();
});

app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

app.post('/product', (req, res, next) => {
    console.log(req.body);
    //res.redirect('/');
    res.send(req.body.title)

});


app.use('/', (req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);
