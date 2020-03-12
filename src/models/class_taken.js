/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('class_taken', {
		ctid: {
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
		subj_code: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		date: {
			type: DataTypes.DATEONLY,
			allowNull: false
		},
		hr_no: {
			type: DataTypes.STRING(50),
			allowNull: false
		}
	}, {
		tableName: 'class_taken'
	});
};
