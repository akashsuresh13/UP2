/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('substitue_raise', {
		fid: {
			type: DataTypes.STRING(10),
			allowNull: false,
			primaryKey: true
		},
		cid: {
			type: DataTypes.STRING(10),
			allowNull: false,
			primaryKey: true
		}
	}, {
		tableName: 'substitue_raise'
	});
};
