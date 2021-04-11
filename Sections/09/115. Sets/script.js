'use strict';
/*
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// [first, , second] = restaurant.categories;
// console.log(first, second);

// let [main, , secondary] = restaurant.categories;
// console.log(first, second);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);


const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} as ${time}`
    );
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole,21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole,21',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(name, openingHours, categories);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating varialbles
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(open, close);
console.log(o, c);
*/
/*
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
*/
/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// [first, , second] = restaurant.categories;
// console.log(first, second);

// let [main, , secondary] = restaurant.categories;
// console.log(first, second);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);


const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} as ${time}`
    );
  },

  // real world example
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays or more
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables: arrays, string, maps, sets.  NOT objects

const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
//console.log(`${...str} Schmedmann`);

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3'),
// ];
//console.log(ingredients);
//restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[3]);
//restaurant.orderPasta(...ingredients);

// Objects
const newRestaraunt = { ...restaurant, founder: 'Guiseppe' };
console.log(newRestaraunt);

const restarauntCopy = { ...restaurant };
restarauntCopy.name = 'Ristorante Roma';
console.log(restarauntCopy);
console.log(restaurant.name);

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} as ${time}`
    );
  },

  // real world example
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// 1) Destructuring

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on the LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];

console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  //console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 5);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');


*/
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[6]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced oubject literals
  openingHours: openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} as ${time}`
    );
  },

  // real world example
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
/*
const properties = Object.keys(openingHours);
console.log(properties);

console.log(`We are opened on ${properties.length} days.`);

let openStr = `We are opened on ${properties.length} days.`;

for (const day of properties) {
  openStr += `${day}, `;
}

console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire Object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// WITH OPTIONAL CHAINING
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours.thu.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}


// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];

console.log(users[0]?.name ?? 'User array empty');
if (users.length > 0) console.log(users[0]?.name);
else console.log('User array empty');


restaurant.numGuests = 0;

const guests = restaurant.numGuests || 10;
console.log(guests);

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);


console.log('------------- OR --------------');
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || '' || 0 || 'Hello' || 23 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('------------- AND --------------');

console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'Jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortman',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hammels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//console.log(game.players[0]);
// 1.
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const playersFinal = [...players1, ...['Thiago', 'Coutinho', 'Perisic']];
console.log(playersFinal);

// 5.
const { team1, x, team2 } = game.odds;
const draw = x;
console.log(team1, draw, team2);

// Jonas...
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// 6.
const totalGoals = function (player) {
  const scored = game.scored;
  //console.log(player, scored);
  let goalCounter = 0;
  for (let i = 0; i < scored.length; i++) {
    if (player === scored[i]) {
      goalCounter += 1;
    }
  }
  return goalCounter;
};

console.log(totalGoals('Muller'));
console.log(totalGoals('Lewandowski'));
console.log(totalGoals('Davies'));
console.log(totalGoals('Gnarby'));

console.log('------------------- print goals --------------------');
const printGoals = function (...players) {
  for (let i = 0; i < players.length; i++) {
    console.log(players[i], totalGoals(players[i]));
  }
  return 'Done';
};

console.log(printGoals('Davies'));
console.log(printGoals('Muller'));
console.log(printGoals('Lewandowski'));
console.log(printGoals('Kimmich'));
console.log(printGoals('Hummels'));
console.log(printGoals(...game.scored));

// 7.
console.log(Math.min(4, 5, 6));
const odds = game.odds;
console.log(odds);
console.log(
  odds.team1 > odds.team2 || 'team1' || odds.team1 < odds.team2 || team2
);

console.log((odds.team1 > odds.team2 && 'team2') || 'team1');

console.log((odds.team2 > odds.team1 && 'team1') || 'team2');

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);

for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item}`);
}

console.log([...menu.entries()]);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}



const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortman',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hammels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};


//console.log(game.players[0]);
// 1.
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const playersFinal = [...players1, ...['Thiago', 'Coutinho', 'Perisic']];
console.log(playersFinal);

// 5.
const { team1, x, team2 } = game.odds;
const draw = x;
console.log(team1, draw, team2);

// Jonas...
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// 6.
const totalGoals = function (player) {
  const scored = game.scored;
  //console.log(player, scored);
  let goalCounter = 0;
  for (let i = 0; i < scored.length; i++) {
    if (player === scored[i]) {
      goalCounter += 1;
    }
  }
  return goalCounter;
};

console.log(totalGoals('Muller'));
console.log(totalGoals('Lewandowski'));
console.log(totalGoals('Davies'));
console.log(totalGoals('Gnarby'));

console.log('------------------- print goals --------------------');
const printGoals = function (...players) {
  for (let i = 0; i < players.length; i++) {
    console.log(players[i], totalGoals(players[i]));
  }
  return 'Done';
};

console.log(printGoals('Davies'));
console.log(printGoals('Muller'));
console.log(printGoals('Lewandowski'));
console.log(printGoals('Kimmich'));
console.log(printGoals('Hummels'));
console.log(printGoals(...game.scored));

// 7.
console.log(Math.min(4, 5, 6));
const odds = game.odds;
console.log(odds);
console.log(
  odds.team1 > odds.team2 || 'team1' || odds.team1 < odds.team2 || team2
);

console.log((odds.team1 > odds.team2 && 'team2') || 'team1');

console.log((odds.team2 > odds.team1 && 'team1') || 'team2');

// 1.
console.log('---------------------- 1 -----------------------');
const gameScored = game.scored;
console.log(gameScored);

let counter = 1;
let player = '';
for (player in gameScored) {
  console.log(`Goal ${counter}: ${gameScored[player]}`);
  counter += 1;
}

for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

// 2.
console.log('---------------------- 2 -----------------------');
const odds = game.odds;
console.log((odds.team1 + odds.x + odds.team2) / 3);

const jodds = Object.values(game.odds);
let average = 0;
for (const odd of jodds) average += odd;

average /= jodds.length;
console.log(average);
// 3.
console.log('---------------------- 3 -----------------------');
//console.log(game.team1);
//console.log(odds.team1);

const teamNames = ['team1', 'x', 'team2'];
console.log(game[teamNames[0]]);
console.log(game[teamNames[1]]);
console.log(game[teamNames[2]]);

console.log(game.odds[teamNames[0]]);
console.log(game.odds[teamNames[1]]);
console.log(game.odds[teamNames[2]]);

console.log(teamNames.length);

for (let i = 0; i < teamNames.length; i++) {
  console.log(
    (game[teamNames[i]] ? 'Odd of victory ' : 'Odd of draw') +
      (game[teamNames[i]] ? game[teamNames[i]] : '') +
      (': ' + game.odds[teamNames[i]])
  );
}

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : 'victory ${game[team]}';
  console.log(`Odd of ${teamStr} ${odd}`);
}
// BONUS
console.log('---------------------- BONUS -----------------------');

console.log(game.scored);

const scoreCount = function (player) {
  let counter = 0;
  for (let i = 0; i < game.scored.length; i++) {
    if (game.scored[i] === player) counter += 1;
  }
  return counter;
};

console.log(scoreCount(game.scored[0]));
console.log(scoreCount(game.scored[1]));
console.log(scoreCount(game.scored[3]));

let uniqueArr = [...new Set(game.scored)];
console.log(uniqueArr);

const scorers = {};

for (const key of uniqueArr) {
  scorers[key] = scoreCount(key);
}

console.log(scorers);

*/
const orderedSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(orderedSet);
console.log(new Set('Jonas'));
console.log(orderedSet.size);
console.log(orderedSet.has('Pizza'));
console.log(orderedSet.has('Bread'));
orderedSet.add('Garlic Bread');
orderedSet.add('Garlic Bread');
console.log(orderedSet);

orderedSet.delete('Risotto');
console.log(orderedSet);

//orderedSet.clear();
//console.log(orderedSet);

for (const order of orderedSet) console.log(order);

// 1. Example - Remove duplicate values of arrays

const staff = [
  'Waiter',
  'Chef',
  'Manager',
  'Waiter',
  'Chef',
  'Waiter',
  'Chef',
  'Waiter',
  'Chef',
];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set([
    'Waiter',
    'Chef',
    'Manager',
    'Waiter',
    'Chef',
    'Waiter',
    'Chef',
    'Waiter',
    'Chef',
  ]).size
);

console.log(new Set('jonasschmedtmann'));
console.log(new Set('jonasschmedtmann').size);
