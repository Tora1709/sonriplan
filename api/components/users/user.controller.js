var User = require('./user.model.js');

module.exports.save = function(req,res){
	var newUser = new User({
		name : req.body.name,
		pass : req.body.pass,
		email : req.body.email,
		pass : req.body.pass,
		rol : req.body.rol,
		locate : req.body.locate
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

	module.exports.update = function(req, res) {
	    console.log(req.body.id);
	    User.findByIdAndUpdate(req.body._id, {
	        $set: req.body
	    }).then(function(data) {
	        res.json({
	            success: true,
	            msg: 'Se ha actualizado correctamente.'
	        });
	    });
	}

	module.exports.delete = function(req, res) {
			console.log(req.body.id);
			User.findOneAndRemove(req.body._id, {
					$delete: req.body
			}).then(function(data) {
					res.json({
							success: true,
							msg: 'Se ha eliminado correctamente.'
					});
			});
	}
