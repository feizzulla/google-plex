"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Token }) {
      this.belongsTo(Token, { foreignKey: "user_id" });
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      balance: DataTypes.STRING,
      subscribe: DataTypes.BOOLEAN,
      rights: DataTypes.JSON,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
