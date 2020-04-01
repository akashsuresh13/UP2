/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('students', {
		sid: {
			type: DataTypes.STRING(50),
			allowNull: false,
			primaryKey: true
		},
		sname: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		sfpd: {
			type: "LONGBLOB",
			allowNull: false
		}
	}, {
		tableName: 'students'
	});
};
