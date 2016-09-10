module.exports = {

	SubCoin: function(user_id, amount, callback) {
		Model.user.findAll({
			where: {
				user_id: user_id
			}
		}).then(function(users) {
			if (!users.length) {
				return callback(Helper.Errors.UserNotExists);
			}
			user = users[0];
			if (user.user_coin - amount < 0) {
				return callback(Helper.Errors.CoinNotEnough);
			}

			user.user_coin = user.user_coin - amount;
			user.save();
			return callback(null);
		});
	}

}
