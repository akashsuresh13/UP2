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
		srid: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		subj_code: {
			type: DataTypes.STRING(50),
			allowNull: false
		}
	}, {
		tableName: 'substitute_transaction'
	});
};
