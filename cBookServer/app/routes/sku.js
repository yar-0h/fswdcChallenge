// This is the URL route created with Express
// This handles http headers and sends the supplied sku to the service which 
// uses that SKU to retrieve and organize the requested data

const express = require('express');
const skuService = require('../services/sku.js');
const app = express.Router();


/* GET sku info */
app.get('/:sku', async function(req, res, next) {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');

    try {
        res.json(await skuService.get(req.params.sku));
    } catch (err) {
        console.error(`error finding info associated with sku: `, err.message);
        next(err);
    }
});


module.exports = app;