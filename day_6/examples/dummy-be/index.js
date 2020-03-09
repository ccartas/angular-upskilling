const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 8080;
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.locals.products = [
    {
        name: 'a',
        category: 's',
        price: 5000,
        doubl: 'd'
    }
];

app.get('/products', (req, res) => {
    const authHeader = req.header('Authorization');
    if(authHeader === 'SECRET') {
        res.status(200).send(app.locals.products);
    } else {
        res.status(401);
    }
    
});

app.get('/products/:index', (req, res) => {
    const index = req.params.index;
    const product = app.locals.products[index];
    console.log(product);
    if(product) {
        res.status(200).send(product);
    } else {
        res.status(404).send({
            message: 'Product not found'
        });
    }
})

app.post('/products', (req, res) => {
    const product = req.body;
    app.locals.products.push(product);
    res.status(201).send({
        message: 'Product added successfully'
    });
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}...`);
})