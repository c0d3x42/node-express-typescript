/**
 * Created by borja on 24/03/16.
 */
/// <reference path='../typings/main.d.ts' />
var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
module.exports = router;