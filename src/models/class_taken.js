/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('class_taken', {
		ctid: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		fid: {
			type: DataTypes.STRING(50),
			allowNull: false,
			primaryKey: true
		},
		cid: {
			type: DataTypes.STRING(50),
			allowNull: false,
			primaryKey: true
		},
		subj_code: {
			type: DataTypes.STRING(50),
			allowNull: false,
			primaryKey: true
		},
		date: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			primaryKey: true
		},
		hr_no: {
			type: DataTypes.STRING(50),
			allowNull: false,
			primaryKey: true
		}
	}, {
		tableName: 'class_taken'
	});
};
