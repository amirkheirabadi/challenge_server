module.exports = {

	HashMake: function(string) {
		var bcrypt = require('bcrypt');

		var salt = bcrypt.genSaltSync(10);
		return bcrypt.hashSync(string, salt);
	},

	HashCheck: function(string, hash) {
		var bcrypt = require('bcrypt');

		return bcrypt.compareSync(string, hash);
	},

	RandomString: function(length, charset) {
		var randomstring = require("randomstring");

		return randomstring.generate({
			length: length,
			charset: charset
		});
	},

	SettingGet: function(name, callback) {
		redis.SELECT(Helper.Setting.REDIS_SETTING);
		redis.GET('setting_' + name, function(err, value) {
			return callback(value);
		});
	},

	SettingSet: function(key, value) {
		Model.setting.findOrCreate({
			where: {
				set_name: key
			},
			defaults: {
				set_value: value
			}
		}).spread(function(setting, created) {
			if (!created) {
				Model.setting.update({
					set_value: value
				}, {
					where: {
						set_name: key
					}
				}).then(function(err, setting) {
					Helper.Redis.InitSetting();
				});
			}
			return;
		});
	}

}
