/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('fac_alloted', {
		aid: {
			type: DataTypes.STRING(50),
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
		subj_code: {
			type: DataTypes.STRING(50),
			allowNull: false
		}
	}, {
		tableName: 'fac_alloted'
	});
};
