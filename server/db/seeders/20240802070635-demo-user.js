"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "flpk92",
          email: "flpk92@gmail.com",
          password: "hesoyam",
          balance: "25",
          subscribe: false,
          rights: JSON.stringify([{ group: "user", subscribe: false }]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "flpk92",
          email: "flpk91@gmail.com",
          password: "hesoyams",
          balance: "0",
          subscribe: false,
          rights: JSON.stringify([{ group: "user", subscribe: false }]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "fspk92",
          email: "magnetto@gmail.com",
          password: "hesoyam",
          balance: "0",
          subscribe: false,
          rights: JSON.stringify([{ group: "user", subscribe: false }]),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
