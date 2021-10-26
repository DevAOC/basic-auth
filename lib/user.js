'use strict';

module.exports = (sequelize, DataTypes) => {
  const userTable = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  userTable.beforeCreate(async (user) => {
    let encryptedPass = await bcrypt.hash(user.password, 10);
    user.password = encryptedPass;
  });
};
