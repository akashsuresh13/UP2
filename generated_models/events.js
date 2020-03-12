/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('events', {
		cuid: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		eid: {
			type: DataTypes.STRING(50),
			allowNull: false,
			primaryKey: true
		},
		ename: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'events'
	});
};
