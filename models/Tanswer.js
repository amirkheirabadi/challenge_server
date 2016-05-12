"use strict";

module.exports = function(sequelize, DataTypes) {
	var Tanswer = sequelize.define("text_answer", {
		answer_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		answer_owner: {
			type: DataTypes.INTEGER,
		},
		answer_value: {
			type: DataTypes.STRING
		},
		answer_status: {
			type: DataTypes.ENUM('inprogress', 'failed', 'success')
		},
	}, {
		timestamps: false,
		classMethods: {
			associate: function(models) {
				Tanswer.belongsTo(models.user, {
					onDelete: "CASCADE",
					foreignKey: 'answer_owner'
				});

				Tanswer.belongsTo(models.text, {
					onDelete: "CASCADE",
					constraints: true,
				});
			}
		}
	});

	return Tanswer;
};