/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('substitute_offers', {
		soid: {
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
		date: {
			type: DataTypes.DATEONLY,
			allowNull: false
		},
		hrid: {
			type: DataTypes.STRING(50),
			allowNull: false
		}
	}, {
		tableName: 'substitute_offers'
	});
};
