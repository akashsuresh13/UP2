/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('absentees', {
		ctid: {
			type: DataTypes.STRING(50),
			allowNull: false,
			primaryKey: true
		},
		sid: {
			type: DataTypes.STRING(50),
			allowNull: false,
			primaryKey: true
		}
	}, {
		tableName: 'absentees'
	});
};
