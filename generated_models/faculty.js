/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('faculty', {
		fid: {
			type: DataTypes.STRING(50),
			allowNull: false,
			primaryKey: true
		},
		fname: {
			type: DataTypes.STRING(25),
			allowNull: false
		},
		fgender: {
			type: DataTypes.ENUM('M','F'),
			allowNull: false
		}
	}, {
		tableName: 'faculty'
	});
};
