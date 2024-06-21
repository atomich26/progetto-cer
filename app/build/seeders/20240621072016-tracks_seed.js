'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tracks', [{
      title: 'Sesso e samba',
      author: "Tony Effe, Gaia",
      embedded: "https://open.spotify.com/embed/track/2Q4Z2js0C6DDUVc7GuLGdF",
      played: 12321123
    },
    {
      title: '30°C',
      author: "Anna",
      embedded: "https://open.spotify.com/embed/track/5eyL6waluu7hXrRrWewBFU",
      played: 3892472
    },
    {
      title: 'SEXY SHOP',
      author: "Fedez, Emis Killa",
      embedded: "https://open.spotify.com/embed/track/0GgIXlhkacCRh30t2Se92q",
      played: 38924234
    },
    {
      title: "Paprika",
      author: "Ghali",
      embedded: "https://open.spotify.com/embed/track/7kS2AVRk5Yj6BTj8PyJFfC",
      played: 3813112
    },
    {
      title: 'COME UN TUONO',
      author: "ROse Villain, Guè",
      embedded: "https://open.spotify.com/embed/track/0lXVWzLwDnKB7Ro5p0AJPg",
      played: 1293112
    },
    {
      title: 'Gata Only',
      author: "FloyyMenor, Cris Mj",
      embedded: "https://open.spotify.com/embed/track/6XjDF6nds4DE2BBbagZol6",
      played: 298791
    },
    {
      title: 'Beatrice',
      author: "Tedua, Annalisa",
      embedded: "https://open.spotify.com/embed/track/5LDmD4cFF0C8BCf3tVvyBW",
      played: 3809111
    }, {
      title: 'MIU MIU',
      author: "Tony Effe",
      embedded: "https://open.spotify.com/embed/track/0ZjxK3xSqyFEDKMMnA7fyl",
      played: 9891231
    }, {
      title: "IO T'O GIUR",
      author: "Geolier, Sfera Ebbasta",
      embedded: "https://open.spotify.com/embed/track/4z9xPVz2Sii4dhM7yhxOpj",
      played: 7863121
    },
    {
      title: 'BBE',
      author: "Anna, Lazza",
      embedded: "https://open.spotify.com/embed/track/0PnIaRhEUne93rWxeHgV70",
      played: 6932892
    },], {});
  },

  async down(queryInterface, Sequelize) {
  }
};
