/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('events_prac', {
		epid: {
			type: DataTypes.STRING(50),
			allowNull: false,
			primaryKey: true
		},
		eid: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		edate: {
			type: DataTypes.DATEONLY,
			allowNull: false
		},
		estart_time: {
			type: DataTypes.TIME,
			allowNull: false
		},
		eend_time: {
			type: DataTypes.TIME,
			allowNull: false
		}
	}, {
		tableName: 'events_prac'
	});
};
