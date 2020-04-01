/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('substitute_transaction', {
		stid: {
			type: DataTypes.STRING(50),
			allowNull: false,
			primaryKey: true
		},
		soid: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		fid: {
			type: DataTypes.STRING(10),
			allowNull: false
		}
	}, {
		tableName: 'substitute_transaction'
	});
};
