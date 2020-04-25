/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('events_stud_att', {
		epid: {
			type: DataTypes.STRING(15),
			allowNull: false,
			primaryKey:true
		},
		sid: {
			type: DataTypes.STRING(15),
			allowNull: false,
			primaryKey:true
		}
	}, {
		tableName: 'events_stud_att'
	});
};
