var express = require('express');
var router = express.Router();


router.get('/', function(req,res){
	res.send('i am a get request from path /');
});

router.get('/:id', function(req,res){
	res.send('Get request to /bicycles/:id');
});

router.get('/new', function(req,res){
	res.send('GET request to /bicycles/new');
});

router.post('/', function(req,res){
	res.send('POST request to /bicycles/new, this is the create route');

});

router.get('/:id/edit', function(req,res){
	res.send('GET request to /bicycles/:id/edit, on the receive route ');

});

router.put('/:id', function(req,res){
	res.send('PUT request to /bicycles/:id, this is the update route');

});

router.delete('/:id', function(req,res){
	res.send('DELTE request to /bicycles/:id, this is the remove route');

});

module.exports = router;