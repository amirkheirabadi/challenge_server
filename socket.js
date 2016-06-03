module.exports = function(io) {
	io.on('connection', function(socket) {
		console.log('connect');
		socket.on('signup', function(data) {
			Controller.AuthController.Signup(data, function(err, result) {
				if (err) {
					return socket.emit('action_err', err);
				}
				return socket.emit('res_token', result);
			});
		});

		socket.on('signin', function(data) {
			Controller.AuthController.Signin(data, function(err, result) {
				if (err) {
					return socket.emit('action_err', err);
				}
				return socket.emit('res_token', result);
			});
		});

		socket.on('reminder', function(data) {
			Controller.AuthController.Reminder(data, function(err, result) {
				if (err) {
					return socket.emit('action_err', err);
				}
				return socket.emit('res_reminder', result);
			});
		});

		socket.on('reminder_check', function(data) {
			Controller.AuthController.ReminderCheck(data, function(err, result) {
				if (err) {
					return socket.emit('action_err', err);
				}
				return socket.emit('res_reminder', result);
			});
		});

		socket.on('reminder_accepted', function(data) {
			Controller.AuthController.ReminderAccepted(data, function(err, result) {
				if (err) {
					return socket.emit('action_err', err);
				}
				return socket.emit('res_reminder', result);
			});
		});

		// Challenge
		socket.on('my_text', function(data) {
			Controller.ChallengeController.myText(data, function(err, result) {
				if (err) {
					return socket.emit('action_err', err);
				}
				return socket.emit('res_text_list', result);
			});
		});

		// socket.on('show_text', function(data) {
		// 	Controller.ChallengeController.show_text(data, function(err, result) {
		// 		if (err) {
		// 			return socket.emit('action_err', err);
		// 		}
		// 		return socket.emit('res_list', result);
		// 	});
		// });

		socket.on('challenge_create', function(data) {
			Controller.ChallengeController.create(data, function(err, result) {
				if (err) {
					return socket.emit('action_err', err);
				}
				return socket.emit('res_create', result);
			});
		});

		socket.on('challenge_edit', function(data) {
			Controller.ChallengeController.update(data, function(err, result) {
				if (err) {
					return socket.emit('action_err', err);
				}
				return socket.emit('res_create', result);
			});
		});
	});
}
