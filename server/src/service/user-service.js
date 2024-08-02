const UserModel = require("../../db/models");
const bcrypt = require("bcrypt");

class UserService {
  async registration(username, email, password) {
    const candidate = await UserModel.findOne({ email });
    if (candidate) {
      throw new Error(`Пользователь с таким ${email} уже существует`);
    }
    const hashPassword = await bcrypt.hash(password, 3);

    const user = await UserModel.create({
      email,
      password: hashPassword,
      balance: 0,
      subscribe: false,
      rights: JSON.stringify([{ group: "user", subscribe: false }]),
    });
  }
}

module.exports = new UserService();
