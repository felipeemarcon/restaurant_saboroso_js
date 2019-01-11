var conn = require('./../inc/db');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  conn.query(`
    SELECT * FROM tb_menus ORDER BY title`,
    (err, results) => {
    if (err) {
      console.log(err);
    }

    res.render('index', {
      title: 'Restaurante Sababoro',
      menus: results
    });

  });
});

router.get('/contacts', function(req, res, next) {
  res.render('contacts', { 
    title: 'Contato - Restaurante Sababoro',
    background: 'images/img_bg_3.jpg',
    h1: 'Diga olá!'
  });
});

router.get('/menus', function(req, res, next) {
  res.render('menus', {
    title: 'Menu - Restaurante Sababoro',
    background: 'images/img_bg_1.jpg',
    h1: 'Saboreie nosso menu!'
  });
});

router.get('/services', function(req, res, next) {
  res.render('services', {
    title: 'Serviços - Restaurante Sababoro',
    background: 'images/img_bg_1.jpg',
    h1: 'É um prazer poder servir!'
  });
});

router.get('/reservations', function(req, res, next) {
  res.render('reservations', {
    title: 'Reservas - Restaurante Sababoro',
    background: 'images/img_bg_2.jpg',
    h1: 'Reserve uma Mesa!'
  });
});

module.exports = router;
