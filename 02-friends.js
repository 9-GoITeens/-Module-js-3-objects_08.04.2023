/*
 * Работа З колекцією (масивом об'єктів)
 */
const friends = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: false },
  { name: 'Ajax', online: false },
];

// console.table(friends);

// for (const friend of friends) {
//   console.log(friend.name);
//   console.log(friend.online);
//   friend.newprop = 555;
// }

// console.table(friends);

/*
 * Шукаєм друга по імені
 */
// const findFriendByName = function (allFriends, friendName) {
//   for (const friend of friends) {
//     console.log('friend', friend.name);

//     if (friend.name === friendName) {
//       return 'Знайшли!!!';
//     }
//   }

//   return 'Не знайшли';
// };

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

/*
 * Отримуєм імена всіх друзів
 */
const getAllNames = function (allFriends) {
  const names = [];
  for (const friend of allFriends) {
    console.log(friend.name);

    names.push(friend.name);
  }
  return names;
};

console.log(getAllNames(friends));
