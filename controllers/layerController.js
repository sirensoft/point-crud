var express = require('express');
var router = express.Router();

var Point = require('../models/point')
var mPoint = new Point();


router.get('/point', async function(req, res) {
    let point = await mPoint.findAll();
    res.json(point)
})

router.post('/point/create', async function(req, res) {
    console.log(req.body)
    await mPoint.create(req.body);
    res.send('OK');
})

router.post('/point/update/:id', async function(req, res) {
    await mPoint.update(req.params.id, req.body);
    res.send(req.params.id);
})

router.get('/point/delete/:id', async function(req, res) {
    await mPoint.delete(req.params.id);
    res.redirect('/')
})


module.exports = router;