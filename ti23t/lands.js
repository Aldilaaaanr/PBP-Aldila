let {checkCondition} = require('./checkweather')

const weatherData = {
    temperature : 26,
    humidity : 60,
    winSpeed : 10
}
let result = checkCondition(weatherData)
console.log(result);
