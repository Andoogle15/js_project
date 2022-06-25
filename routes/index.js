var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Страница Багза Банни
router.get('/bugz_bunny', function(req, res, next){
  res.send("<h1>багз</h1>");
});

// Страница Лолы Банни
router.get('/lola_bunny', function(req, res, next){
  res.send("<h1>лола</h1>");
});
// Страница Дафи Дака
router.get('/duffy_duck', function(req, res, next){
  res.send("<h1>дафи</h1>");
});
// Страница Порки Пига
router.get('/porky_pig', function(req, res, next){
  res.send("<h1>порки</h1>");
});
// Страница Твитти
router.get('/tweety', function(req, res, next){
  res.send("<h1>твитти</h1>");
});
// Страница Йосемита Сэма
router.get('/yosemite_sam', function(req, res, next){
  res.send("<h1>сэм</h1>");
});
// Страница Тасманского дьявола
router.get('/tasmanian_devil', function(req, res, next){
  res.send("<h1>дьявол</h1>");
});
// Страница Спиди Гонзалеса
router.get('/speedy_gonzales', function(req, res, next){
  res.send("<h1>спиди</h1>");
});
// Страница Фогорна
router.get('/foghorn', function(req, res, next){
  res.send("<h1>фогорн</h1>");
});
// Страница Койота Вайла
router.get('/coyote', function(req, res, next){
  res.send("<h1>койот</h1>");
});
// Страница Дорожного бегуна
router.get('/roadrunner', function(req, res, next){
  res.send("<h1>бегун</h1>");
});
module.exports = router;
