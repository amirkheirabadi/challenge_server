var Sequelize = require('sequelize');
module.exports = {
	my_text : function (data,callback) {
		var query = {
			where :{
				text_owner: data.user.user_id,
			},
			limit : data.limit,
			offset : data.offset,
		};

		Model.text.findAll(query).then(function (texts) {
			return callback(null,texts);
		});
	},

	// list: function(data, callback) {
	// 	var query = {
	// 		where: {
	// 			text_owner: {
	// 				not: data.user.user_id
	// 			},
	// 			text_status: 'active',
	// 			text_level: data.level,
	// 		},
	// 		limit: 1,
	// 		include: [{
	// 			model: Model.text_answer,
	// 			where: Sequelize.or({
	// 				answer_owner: {
	// 					not: data.user.user_id
	// 				},
	// 				answer_status: {
	// 					not: ['inprogress', 'success']
	// 				}
	// 			})
	// 		}]
	// 	};
	//
	// 	if (typeof data.category != 'undefined' && data.category != 'all') {
	// 		query.where.text_categoty = data.category;
	// 	}
	//
	// 	Model.text.findAll(query).then(function(text) {
	// 		if (!text.length) {
	// 			return callback(null, []);
	// 		}
	// 		var amount_for_change_challenge = Helper.Challenge.SettingGet('coin_for_challenge_change');
	// 		Helper.User.SubCoin(data.user.user_id, amount_for_change_challenge, function(err) {
	// 			if (err) return callback(err, []);
	// 			return callback(null, {
	// 				text_id: text[0].text_id,
	// 				text_question: text[0].text_question,
	// 				text_level: text[0].text_level,
	// 				text_coin: text[0].text_coin
	// 			});
	// 		})
	// 	});
	// },


	// create_text: function(data, callback) {
	// 	var amounr_for_create_challenge = Helper.Challenge.SettingGet('conin_for_challenge_create');
	// 	Helper.User.SubCoin(data.user.user_id, amounr_for_create_challenge, function(err) {
	// 		if (err) {
	// 			return callback(err, null);
	// 		}
	// 		Model.text.create({
	// 			text_owner: data.user.user_id,
	// 			text_question: data.question,
	// 			text_description: data.description,
	// 			text_answer: data.answer,
	// 			text_categoty: data.category,
	// 			text_level: 1,
	// 			text_coin: amounr_for_create_challenge,
	// 			text_status: data.status,
	// 		}).then(function(text) {
	// 			return callback(null, {
	// 				text_id: text.get('text_id'),
	// 				text_question: text.get('text_question'),
	// 				text_level: text.get('text_level'),
	// 				text_coin: text.get('text_coin'),
	// 			})
	// 		});
	// 	});
	// },
	//
	// show_text : function (data,callback) {
	// 	var query = {
	// 		where :{
	// 			id : data.id,
	// 			owner : data.user.user_id
	// 		},
	// 		include: [{
	// 			model: Model.text_answer,
	// 			where: {
	// 				answer_status: {
	// 					not: ['inprogress']
	// 				}
	// 			}
	// 		}],
	// 	};
	//
	// 	Model.text.findOne(query).then(function (challenge) {
	// 		if (!challenge) {
	// 			return callback(Helper.Errors.ChallengeNotFound,null)
	// 		}
	// 		return callback(null,challenge);
	// 	});
	// }
	//
	// edit: function(data, callback) {
		// Model.text.findAll({
		// 	where: {
		// 		text_owner: data.user.user_id,
		// 		text_id: data.id,
		// 	}
		// }).then(function(text) {
		// 	if (!text.length) {
		// 		return callback(Helper.Errors.ChallengeNotFound, null);
		// 	}
		//
		// 	console.log(text);
		// });
	// },
	//
	// update: function(data, callback) {
	//
	// }

}
