/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('users_fac', {
		uid: {
			type: DataTypes.STRING(50),
			allowNull: false,
			primaryKey: true
		},
		upass: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		fid: {
			type: DataTypes.STRING(50),
			allowNull: false
		}
	}, {
		tableName: 'users_fac'
	});
};
