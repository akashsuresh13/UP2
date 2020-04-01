/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('_sequence', {
		seq_name: {
			type: DataTypes.STRING(50),
			allowNull: false,
			primaryKey: true
		},
		seq_group: {
			type: DataTypes.STRING(10),
			allowNull: false
		},
		seq_val: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false
		}
	}, {
		tableName: '_sequence'
	});
};
