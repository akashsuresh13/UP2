/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('timetable', {
		aid: {
			type: DataTypes.STRING(50),
			allowNull: false,
			primaryKey: true
		},
		day_no: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		hr_no: {
			type: DataTypes.STRING(30),
			allowNull: false,
			primaryKey: true
		}
	}, {
		tableName: 'timetable'
	});
};
