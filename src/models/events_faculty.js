/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('events_faculty', {
		eid: {
			type: DataTypes.STRING(50),
			allowNull: false,
			primaryKey: true
		},
		fid: {
			type: DataTypes.STRING(50),
			allowNull: false,
			primaryKey: true
		}
	}, {
		tableName: 'events_faculty'
	});
};
