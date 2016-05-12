"use strict";

module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define("user", {
		user_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		user_mobile: {
			type: DataTypes.STRING,
			unique: true
		},
		user_password: {
			type: DataTypes.STRING,
		},
		user_fname: {
			type: DataTypes.STRING,
		},
		user_lname: {
			type: DataTypes.STRING
		},
		user_gender: {
			type: DataTypes.ENUM('male', 'famle')
		},
		user_coin: {
			type: DataTypes.INTEGER
		},
		user_diamond: {
			type: DataTypes.INTEGER
		},
		user_status: {
			type: DataTypes.ENUM('pending', 'suspend', 'active'),
		},
	}, {
		classMethods: {
			associate: function(models) {
				User.hasMany(models.text, {
					as: 'texts',
					foreignKey: 'text_owner'
				});

				User.hasMany(models.text_answer, {
					as: 'tanswer',
					foreignKey: 'answer_owner'
				});
			}
		}
	});

	return User;
};