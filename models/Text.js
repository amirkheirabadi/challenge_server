"use strict";

module.exports = function(sequelize, DataTypes) {
	var Text = sequelize.define("text", {
		text_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		text_owner: {
			type: DataTypes.INTEGER,
		},
		text_category: {
			type: DataTypes.INTEGER
		},
		text_question: {
			type: DataTypes.STRING
		},
		text_description: {
			type: DataTypes.STRING
		},
		text_answer: {
			type: DataTypes.STRING
		},
		text_level: {
			type: DataTypes.INTEGER
		},
		text_coin: {
			type: DataTypes.INTEGER
		},
		text_status: {
			type: DataTypes.ENUM('pending', 'active', 'finish', 'arbitration')
		}
	}, {
		classMethods: {
			associate: function(models) {
				Text.belongsTo(models.user, {
					onDelete: "CASCADE",
					foreignKey: 'text_owner'
				});

				Text.belongsTo(models.category, {
					onDelete: "CASCADE",
					foreignKey: 'text_category'
				});

				Text.hasMany(models.text_answer, {
					onDelete: "CASCADE",
					constraints: true
				});
			}
		}
	});

	return Text;
};