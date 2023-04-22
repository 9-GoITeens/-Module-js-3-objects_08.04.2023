/*
 * Обєкти (робимо плейлист музики: імя, рейтинг, треки, кількість треків)
 * - Літерал обєкта
 * - Ввластивість, ключі (імя) і значення
 * - Як відрізнити обєкт від області видимостф
 */

// const playlist = {
//   name: 'Мій супер плей-лист!',
//   rating: 5,
//   traks: ['трек-1', 'трек-2', 'трек-3'],
//   tracksCount: 3,
// };

// console.log(playlist);

// Область видимиості
// const x = {};

// const fn = function (myOjekt) {};

// fn({ a: 1, b: 2, c: 3 });

// const fn2 = function () {
//   return { a: 5 };
// };

// console.log(fn2());

/*
 * Доступ до влвстивості
 * - obj.key
 * - obj['key']
 * - Властивості яких немає
 */
// const playlist = {
//   name: 'Мій супер плей-лист!',
//   rating: 5,
//   traks: ['трек-1', 'трек-2', 'трек-3'],
//   tracksCount: 3,
// };

// console.log(playlist.rating);

// const properyName = 'rating';
// console.log(playlist['rating']);
// console.log(properyName);

/*
 * Короткий запис влвстивостей
 */
// const username = 'Mango';
// const email = 'mango@mail.com';

// const signupData = {
//   username: username,
//   email: email,
// };

// console.log(signupData);

/*
 * Властивості які вичисляються
 */

//  <input name="color" value="tomato" >

// const inputName = 'color';
// const inputValue = 'tomato';

// const colorPickerData = {
//   [inputName]: inputValue,
// };
// console.log(colorPickerData); //{color: 'tomato'}

/*
 * Як добавити в обєкт ключі
 */
// const playlist = {
//   name: 'Мій супер плей-лист!',
//   rating: 5,
//   traks: ['трек-1', 'трек-2', 'трек-3'],
//   tracksCount: 3,
//   qwe: 3,
// };

// playlist.rating = 10;
// console.log(playlist);

/*
 * Ссилочний тип {} === {}
 */
// console.log([1, 2, 3] === [1, 2, 3]); //false
// console.log({ a: 1 } === { a: 1 }); //false

// console.log(1 === 1); //true
// console.log('first' === 'first'); //true

/*
 * Масиви і функції це обєкти
 */

// const a = [1, 2, 3];
// a.hello = ':)';

// console.log('a', a);

// const fn = function () {
//   console.log('hello!');
// };

// fn.hello = ':)';

// console.dir(fn);
