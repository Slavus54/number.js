const NumberCore = require('./src/Core')

const number = new NumberCore()

console.log(number.digitsOfNum(368))
console.log(number.getNumListByBordersMultiplicity(6, 21, 5))
console.log(number.findNearestBaseOfPoweredNum(128, [3, 5, 9, 2, 11]))
console.log(number.deleteNumDigit(25168, 3))

module.exports = {NumberCore}