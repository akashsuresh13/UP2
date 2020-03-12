/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('substitue_raise', {
		srid: {
			type: DataTypes.STRING(50),
			allowNull: false,
			primaryKey: true
		},
		fid: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		cid: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		want_yn: {
			type: DataTypes.INTEGER(1),
			allowNull: false
		}
	}, {
		tableName: 'substitue_raise'
	});
};
