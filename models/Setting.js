"use strict";

module.exports = function(sequelize, DataTypes) {
	var Setting = sequelize.define("setting", {
		set_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		set_name: {
			type: DataTypes.STRING,
			unique: true
		},
		set_value: {
			type: DataTypes.TEXT,
		},
	}, {
		timestamps: false,
	});

	return Setting;
};