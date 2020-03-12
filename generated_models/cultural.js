/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('cultural', {
		cuid: {
			type: DataTypes.STRING(50),
			allowNull: false,
			primaryKey: true
		},
		cname: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		cstart_date: {
			type: DataTypes.DATEONLY,
			allowNull: false
		},
		cend_date: {
			type: DataTypes.DATEONLY,
			allowNull: false
		}
	}, {
		tableName: 'cultural'
	});
};
