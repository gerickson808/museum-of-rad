var router = require('express').Router();



router.get('/', function (req, res){
	res.render('index');
});

router.get('/game',function (req,res){
	res.render('game', { script: 'game', useScript: true });
});

router.get('/ogame',function (req,res){
	res.render('ogame', { script: 'ogame', useScript: true });
});

module.exports = router;