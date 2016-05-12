module.exports = {
	// General
	InitSetting: function() {
		Model.setting.findAll().then(function(records) {
			redis.SELECT(Helper.Setting.REDIS_SETTING);
			redis.KEYS('setting_*', function(keys) {
				if (typeof keys == "array") {
					keys.forEach(function(key) {
						redis.DEL(key);
					});
				}
				records.forEach(function(record) {
					redis.SET('setting_' + record.set_name, record.set_value);
				});
			});
		});
	},

	UserSetRedis: function(id_user) {
		redis.SELECT(Helper.Setting.REDIS_USER);
		var random_key = Helper.Challenge.RandomString(Helper.Setting.TOEKN_LENGHT, 'alphanumeric');
		redis.set("token_" + random_key, id_user);
		redis.expire(random_key, Helper.Setting.REDIS_EXPIRE_TIME);
		return random_key;
	},


	// Authentication
	AuthReminder: function(mobile) {
		redis.SELECT(Helper.Setting.REDIS_USER);
		var random_key = Helper.Challenge.RandomString(config.SMSCODE_LENGHT, 'numeric');
		redis.set('reminder_' + mobile, random_key);
		redis.expire(random_key, Helper.Errors.REDIS_EXPIRE_TIME);
		return random_key;
	},



	// Token
	FindToken: function(token, callback) {
		redis.SELECT(Helper.Setting.REDIS_USER);
		redis.KEYS('token_' + token, function(err, keys) {
			if (!keys.length) {
				return callback(error.TokenNotInRedis, null);
			}
			redis.GET("token_" + token, function(err, value) {
				Model.user.find(value).then(function(user) {
					if (!user) {
						return callback(Helper.Errors.UserNotExists, null);
					}
					return callback(null, user.dataValues);
				});
			});
		});
	}

}
