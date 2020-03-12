/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('subjects', {
		subj_code: {
			type: DataTypes.STRING(50),
			allowNull: false,
			primaryKey: true
		},
		subj_name: {
			type: DataTypes.TEXT,
			allowNull: false
		}
	}, {
		tableName: 'subjects'
	});
};
