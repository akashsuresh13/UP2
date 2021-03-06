/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('events_student', {
		eid: {
			type: DataTypes.STRING(50),
			allowNull: false,
			primaryKey: true
		},
		sid: {
			type: DataTypes.STRING(50),
			allowNull: false,
			primaryKey: true
		},
		sdate: {
			type: DataTypes.DATEONLY,
			allowNull: false
		},
		is_enabled: {
			type: DataTypes.ENUM('0','1'),
			allowNull: false
		}
	}, {
		tableName: 'events_student'
	});
};
