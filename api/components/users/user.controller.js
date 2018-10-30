var user = require('./user.model.js');

module.exports.save = function(req,res){
	var newUser = new User({
		email : req.body.email,
		pass : req.body.pass,
		rol : req.body.rol
	});


	newUser.save(function(err){
		if (err) {
			res.json({success:false, msg:'No se envió la solicitud' + err});
		}else{
			res.json({success:false, msg:'Se envió la solicitud'});
		}	

	});

}

	module.exports.findAll = function(req,res){
		User.find().then(function(request){
			res.send(request);
		})
	}
