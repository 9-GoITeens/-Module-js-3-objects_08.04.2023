/*
 * Методи обєкта і this при зверненні до властивості в методах
 *
 * http://fecore.net.ua/books/m5ph3r-javascript/module-03/images/context.jpg
 *
 * - changeName
 * - addTrack
 * - updateRating
 * - getTrackCount
 */

const playlist = {
  name: 'Мій супер плей-лист!',
  rating: 5,
  traks: ['трек-1', 'трек-2', 'трек-3'],
  changeName(newName) {
    // console.log('this в середені changeName', this);

    this.name = newName;
  },
  addTrack(treck) {
    this.traks.push(treck);
  },
  updateRating(newRating) {
    this.rating = newRating;
  },
  getTrackCount() {
    return this.traks.length;
  },
};

// playlist.changeName('Нове імя');

// playlist.addTrack('Новий трек-1');

// playlist.addTrack('Новий трек-2');

// playlist.addTrack('Новий трек-3');
// console.log(playlist.getTrackCount());

// playlist.updateRating(10);
// console.log(playlist);
