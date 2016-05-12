"use strict";

module.exports = function(sequelize, DataTypes) {
	var Category = sequelize.define("category", {
		category_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		category_name: {
			type: DataTypes.STRING,
			unique: true
		},

	}, {
		timestamps: false,
		classMethods: {
			associate: function(models) {
				Category.hasMany(models.text, {
					as: 'texts',
					foreignKey: 'text_category'
				});
			}
		}
	});

	return Category;
};