'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      username: 'Lucian',
      password: bcrypt.hashSync('123456', 5),
    },
    {
      username: 'Valentina',
      password: bcrypt.hashSync('123456', 5),
    }], {}).then(() => {
      return queryInterface.bulkInsert('Posts', [{
        userId: 1,
        title: "Furtuni puternice!",
        text:"dfjkk",
        likes: 0,
        dislikes: 2,
      },
      {
        userId: 1,
        title: "Temperaturi de 10grade!",
        text:"dfjkk",
        likes: 1,
        dislikes: 1,
      },
      {
        userId: 2,
        title: "Ninsori in Ilfov!",
        text:"dfjkk",
        likes: 1,
        dislikes: 0,
      },
      {
        userId: 2,
        title: "Viscol puternic in Ilfov!",
        text:"dfjkk",
        likes: 2,
        dislikes: 0,
      }], {}).then(() => {
        return queryInterface.bulkInsert('Comments', [{
          userId: 2,
          postId: 1,
          text: "Asa e!",
          likes: 2,
          dislikes: 0,
        },
        {
          userId: 1,
          postId: 4,
          text: "Asa e, sunt de acolo!",
          likes: 1,
          dislikes: 2,
        },
        {
          userId: 2,
          postId: 1,
          text: "Asa e!",
          likes: 1,
          dislikes: 0,
        }], {}).then(() => {
          return queryInterface.bulkInsert('Notifications', [{
            userId: 2,
            postId: 1,
            seen: false,
          }], {})
        })
      })
    });
  },

  down: (queryInterface, Sequelize) => {
  
  }
};
