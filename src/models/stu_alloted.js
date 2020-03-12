/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('stu_alloted', {
		sid: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		cid: {
			type: DataTypes.STRING(50),
			allowNull: false
		}
	}, {
		tableName: 'stu_alloted'
	});
};
