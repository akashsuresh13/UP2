/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('events', {
		eid: {
			type: DataTypes.STRING(50),
			allowNull: false,
			primaryKey: true
		},
		cuid: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		ename: {
			type: DataTypes.STRING(50),
			allowNull: false
		}
	}, {
		tableName: 'events'
	});
};
