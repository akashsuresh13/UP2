/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('events_student', {
		eid: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		sid: {
			type: DataTypes.STRING(50),
			allowNull: false
		}
	}, {
		tableName: 'events_student'
	});
};
