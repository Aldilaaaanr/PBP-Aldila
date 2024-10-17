let { checkCondition } = require("./checkweather");
let { landsCondition } = require("./lands");

const weatherData = {
  temperature: 26,
  humidity: 60,
  winSpeed: 10,
};
let result = checkCondition(weatherData);

const lands = [
  ["fertile", "dry", "fertile", "fertile"],
  ["barren", "dry", "dry", "fertile"],
  ["fertile", "fertile", "fertile", "dry"],
  ["dry", "dry", "dry", "dry"],
];

let landsresult = landsCondition(lands);
console.log(`Total fertile plot: ${landsCondition(lands)}`);
console.log(`Total plots to be planted: ${landsCondition(lands)}`);
console.log(checkCondition(weatherData));