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

const question = new Map([
  [`question`, `What is the best programming language in the world?`],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try Again'],
]);

console.log(question);

// Convert objects to maps
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));

console.log(hoursMap);

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

const answer = Number(prompt('Your answer'));
console.log(answer);
console.log(question.get(question.get('correct') === answer));

console.log([...question]);
console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
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

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest);
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
console.log(rest.has('categories'));
rest.delete(2);
//rest.clear();

console.log(rest);
console.log(rest.size);

const arr = [1, 2];
console.log(rest.set(arr, 'Test'));
console.log(rest.set(document.querySelector('h1'), 'Heading'));

console.log(rest.get(arr));


const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.
console.log([...gameEvents]);
const arr = [...gameEvents];
const arr2 = [];
const eventTimes = [];
for (const x of arr) {
  arr2.push(x[1]);
  eventTimes.push(x[0]);
  console.log(x[1]);
}

const events = new Set(arr2);
console.log(events);

console.log(gameEvents.values());
console.log(new Set(gameEvents.values()));
console.log(...new Set(gameEvents.values()));

// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.
const diff = [];
for (let i = 0; i < eventTimes.length - 1; i++) {
  console.log(
    eventTimes[i + 1],
    eventTimes[i],
    eventTimes[i + 1] - eventTimes[i]
  );
  diff.push(eventTimes[i + 1] - eventTimes[i]);
}

// 3.

console.log('diff : ' + diff);
let sum = 0;
for (let j = 0; j < diff.length; j++) {
  sum = sum + diff[j];
}

console.log('sum: ' + sum);

console.log(
  `An event happened, on average, every ${sum / diff.length} minutes`
);

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

const time = [...gameEvents.keys()].pop();
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// 4.

for (const [minute, event] of gameEvents) {
  let half = minute < 45 ? `[FIRST HALF ]` : '[SECOND HALF] ';

  console.log(`${half} ${minute}:${event}`);
}


const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);
console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));

console.log(airline.indexOf('Portugal'));
console.log(airline.indexOf('portugal'));
console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are Middle Seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You got lucky');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas').slice(1));


const airline = 'TAP Air Portugal';

console.log(airline.toUpperCase());
console.log(airline.toLowerCase());

console.log('JONAS'.toLowerCase());

const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing email
const email = 'hello@jonas.io';
const loginEmail = '   Hello@Jonas.io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

console.log(email === normalizedEmail);

// replacing
const priceGB = '288,97#';
const priceUS = priceGB.replace('#', '$').replace(',', '.');
console.log(priceUS);

const announcement = `All passengers come to boarding door 23.  Boarding door 23!`;

console.log(announcement.replaceAll('door', 'gate'));

console.log(announcement.replaceAll(/door/g, 'gate'));

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.includes('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the new Airbus family');
}

// practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome Aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr', firstName, lastName.toUpperCase()].join(' ');

console.log(newName);

const capitalzedName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(' '));
};

const capitalzedName2 = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n.slice(0, 1).toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(' '));
};

const capitalzedName3 = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

const passenger = 'jessica ann smith davis';

capitalzedName(passenger);
capitalzedName('jonas schmedtmann');

capitalzedName2(passenger);
capitalzedName2('jonas schmedtmann');

capitalzedName3(passenger);
capitalzedName3('jonas schmedtmann');

// Padding
const message = 'Go to gate 23';
console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);

  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(123343556654656));
console.log(maskCreditCard(38837774332));
console.log(maskCreditCard('33453789502973473'));

const message2 = 'Bad weather... All Departures Delayed...';

console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'???'.repeat(n)}`);
};

console.log(planesInLine(6));
*/

const checkEmoji = '✅';
//console.log(checkEmoji);

document.body.append(document.createElement('textarea'));
//textArea.id = 'TextArea';

document.body.append(document.createElement('button'));
//button1.id = 'Button';
//button1.innerHTML = 'Convert';

document.querySelector(
  'textarea'
).value = `underscore_case\n first_name\nSome_Variable\n  calculate_AGE\ndelayed_departure`;

document.querySelector('button').addEventListener('click', function () {
  const str = document.querySelector('textarea').value;
  //   //console.log(str);

  let lines = str.split('\n');
  //console.log(lines);

  lines = trimArray(lines);
  //   //console.log(lines);

  let repeatChar = 1;

  for (let l of lines) {
    //let items = l.split('_');
    //let s1 = items[0].toLowerCase();
    //let s2 = items[1].toLowerCase();
    const [s1, s2] = l.toLowerCase().trim().split('_');

    let strOut = s1 + s2.replace(s2[0], s2[0].toUpperCase());
    console.log(strOut.padEnd(30, ' ') + checkEmoji.repeat(repeatChar));
    repeatChar += 1;
  }
});

///document.body.append(textArea);
//document.body.append(button1);

// function myFunction() {
//   var x = document.getElementById('TextArea').value;
//   //document.getElementById("demo").innerHTML = x;
//   //console.log(x);
// }

// function setText() {
//   var text = `underscore_case\n first_name\nSome_Variable\n  calculate_AGE\ndelayed_departure`;
//   document.getElementById('TextArea').value = text;
// }
// setText();

// function getTextAreaData() {
//   return document.getElementById('TextArea').value;
// }

function trimArray(lines) {
  const returnArr = [];
  for (const l of lines) {
    returnArr.push(l.trim());
  }
  return returnArr;
}

// function codeChallenge4() {
//   console.log('running codeChallenge4');
//   const str = getTextAreaData();
//   //console.log(str);

//   let lines = str.split('\n');
//   //console.log(lines);

//   lines = trimArray(lines);
//   //console.log(lines);

//   let repeatChar = 1;

//   for (let l of lines) {
//     let items = l.split('_');
//     let s1 = items[0].toLowerCase();
//     let s2 = items[1].toLowerCase();

//     let strOut = s1 + s2.replace(s2[0], s2[0].toUpperCase());
//     console.log(strOut.padEnd(30, ' ') + checkEmoji.repeat(repeatChar));
//     repeatChar += 1;
//   }
// }

// document.getElementsByClassName('Button').onclick = function () {
//   codeChallenge4();
// };

//button1.onclick = codeChallenge4();
//button1.addEventListener('click', codeChallenge4());
