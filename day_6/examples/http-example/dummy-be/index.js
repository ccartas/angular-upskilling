const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.locals.products = [
    {
        productName: 'Asus ROG',
        category: 'LAPTOP',
        price: 5000
    },
    {
        productName: 'iMac Pro',
        category: 'DESKTOP',
        price: 30000
    }
];

app.get('/', (req, res) => {
    res.status(200).send('Hello There');
})

app.get('/products', (req, res) => {
    const authHeader = req.header('Authorization');
    if(authHeader === 'MY SECRET VALUE') {
        res.status(200).send(app.locals.products);
    } else {
        res.status(401).send({
            message: 'Unathorized operation.'
        });
    }
    
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})