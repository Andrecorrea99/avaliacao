var express = require('express');
var router = express.Router();
var tesmimoialsService = require('../services/testimoialsService');

router.get('/', function(req, res, next){
    var testimoials = tesmimoialsService.getTestimoials();


    var viewData = {
        title : 'Depoimentos',
        testimoials : testimoials
    };

    res.render('testimonials' , viewData);
});