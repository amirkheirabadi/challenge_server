module.exports = {

	SubCoin: function(user_id, amount, callback) {
		Model.user.findAll({
			where: {
				user_id: user
			}
		}).then(function(users) {
			if (!users.length) {
				return callback(Helper.Errors.UserNotExists);
			}
			user = user[0].dataValues;
			if (user.user_coin - amount < 0) {
				return callback(Helper.Errors.CoinNotEnough);
			}

			user.user_coin = user.user_coin - amount;
			user.save();
			return callback(null);
		});
	}

}