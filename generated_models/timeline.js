/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('timeline', {
		hrid: {
			type: DataTypes.STRING(50),
			allowNull: false,
			primaryKey: true
		},
		start_time: {
			type: DataTypes.TIME,
			allowNull: false
		},
		end_time: {
			type: DataTypes.TIME,
			allowNull: false
		}
	}, {
		tableName: 'timeline'
	});
};
