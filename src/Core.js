const Helper = require('./Helper')

class Core extends Helper {
    static #instance = null

    constructor() {
        super()

        if (Core.#instance) {
            return Core.#instance
        }

        Core.#instance = this
    }

    numDigitInResidueExist(num = 1e1, position = 1) {
        let digit = this.getNumDigit(num, position)
        let items = String(num).split('.')[1].split('')
        let result = false

        items.map(el => {
            if (Number(el) === digit) {
                result = true
            }
        })

        return result
    }

    digitsOfNum(num = 1e1) {
        const int = num

        let result = []
        let position = 1

        while (num > 0) {
            let value = this.getNumDigit(int, position) * 10**(position - 1)

            result = [...result, value]
            
            num -= value
            position++
        }

        result = result.reverse()

        return result
    }

    numResidueSum(num = 1e1) {
        let text = String(num)
        let result = 0

        if (text.includes('.')) {
            result = text.split('.')[1].split('').map(el => Number(el)).reduce((acc, cur) => acc + cur)
        }

        return result
    }
    
    getNumListByBordersMultiplicity(from = 1, to = 1e3, num = 1) {
        let result = []
        let pointer = Math.ceil(from / num) * num

        while (pointer < to) {
            result = [...result, pointer]
            pointer += num
        }

        return result
    }

    findNearestBaseOfPoweredNum(num = 1, list = []) {
        let difference = num
        let result = 0

        list.map(el => {
            let power = 1

            while (Math.round(el**power) <= num) {
                power++
            }
            
            power--

            let value = Math.abs(Math.round(el**power) - num)
         
            if (value < difference) {
                difference = value
                result = el
            }   
        })

        return result
    }

    deleteNumDigit(num = 1, digit = 1) {
        const length = String(num).length
        let result = 0

        if (digit === 1) {
            result = Math.floor(num / 1e1)
        } else if (digit === length) {
            result = num - this.getNumDigit(num, i) * 1e1**(i - 1)
        } else {
            for (let i = 1; i <= length; i++) {
                let item = this.getNumDigit(num, i)            
         
                if (i > digit) {
                    result += item * 1e1**(i - 2)
                } else if (i < digit) {
                    result += item * 1e1**(i - 1)
                }
            }
        }        

        return result
    }

    numSimpleProgression(start = 1e3, step = 1, length = 1e1, isIncrease = true) {
        let result = []
        let value = start

        for (let i = 0; i < length; i++) {
            value = isIncrease ? value + step : value - step

            result = [...result, value]
        }

        return result
    }

    numPercentProgression(num = 1, percent = 1e1, iterations = 1, round = 0) {
        const step = 1 + this.cleanValue(percent, 1, 2)
        let result = num
        
        for (let i = 0; i < iterations; i++) {
            result *= step
        } 

        result = this.cleanValue(1e2, result, round)

        return result
    }

    findNumListAverageQuotient(list = [], num = 1) {
        let result = 0
        let counter = 0

        list.map(el => {
            if (el % num === 0) {
                result += (el / num)
                counter++
            }
        })

        result = Math.round(result / counter)

        return result
    }

    findNearestMultipleToNum(num = 1, list = []) {
        let difference = num
        let result = 1
        
        list.map(el => {
            let value = num % el
       
            if (value < difference) {
                result = el
                difference = value
            }
        })

        return result
    }

    getFastestNumReachByOperation(num = 1, operation = '+', coefficient = 1, list = []) {
        const change = value => eval(`${value}${operation}${coefficient}`)
        
        let isGrowing = change(num) > num
        let iterations = 1e2
        let result = 0

        list.map((el, idx) => {
            let counter = 0
            let value = el

            while (!Boolean(idx) || counter < iterations && isGrowing ? change(value) < num : change(value) > num) {
                value = change(value)
                counter++
            }

            if (counter < iterations) {
                result = el
                iterations = counter
            }      
        })

        return result
    }

    analysisProgressionIterations(list = []) {
        let result = []

        list.map((el, idx) => {
            let next = list[idx + 1]

            if (next) {
                let couple = [el, next]
                let difference = Math.abs(el - next)
                let max = Math.max(...couple)
                let min = Math.min(...couple)
                let symbol

                if (max % min !== 0) {
                    symbol = el <= next ? '+' : '-'
                } else if (difference >= min && max % min === 0) {
                    symbol = el < next ? '*' : '/'
                    
                    difference = Math.floor(max / min) 
                }

                let iteration = `${symbol} ${difference}`

                if (result.find(item => item === iteration) === undefined) {
                    result = [...result, iteration]
                }                
            }
        })
        
        return result
    }

    numLevelsOfMultiplicity(value = 2e3, num = 1) {
        let result = 0

        while (value % num === 0) {
            value /= num
            result++
        }

        return result
    }
    
    numPositionInsideBorders(num = 1, min = 1, max = 1e1, round = 0) {
        let difference = Math.abs(max - min)
        let result = this.percent(Math.abs(num - min), difference, round)

        return result
    }

    buildNumBorders(min = 0, numbers = []) {
        let result = []

        for (let i = 0; i < numbers.length; i++) {
            let current = numbers[i]

            result = [...result, [min, current]]
        
            min = current
        }

        return result
    }

    findMaximumNumDifferenceByIndexedDistance(list = [], percent = 1e1) {
        let distance = this.cleanValue(percent, list.length, 0)
        let result = 0
        let index = 0

        while (index < (list.length - distance)) {
            let first = list[index]
            let second = list[distance + index]
        
            let difference = Math.abs(first - second)

            if (difference > result) {
                result = difference
            }

            index++
        }

        return result
    }

    smoothNumSymmetric(num = 1) {
        const length = String(num).length
        const middle = Math.floor(length / 2)

        let currentIdx = 1
        let result = 0

        for (currentIdx; currentIdx <= middle; currentIdx++) {
            let nextIdx = length - currentIdx + 1

            let current = this.getNumDigit(num, currentIdx)
            let next = this.getNumDigit(num, nextIdx)
            let average = Math[current > next ? 'round' : 'floor']((current + next) / 2)
            
            result += average * 1e1**(currentIdx - 1)
            result += next * 1e1**(nextIdx - 1)
        }

        if (Boolean(length % 2)) {
            let position = Math.round(length / 2)

            result += this.getNumDigit(num, position) * 1e1**(position - 1)
        }

        return result
    }

    findNumListDivisionPairs(list = []) {       
        const length = list.length
        let result = []

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length; j++) {
                if (i !== j) {
                    let current = list[i]
                    let next = list[j]
                    let flag = current % next === 0 || next % current === 0
                    let value = current > next ? [current, next] : [next, current]
                    
                    if (flag && result.find(el => el[0] === value[0] && el[1] === value[1]) === undefined) {
                        result = [...result, value]
                    }
                }
            }
        }

        return result
    }

    findNumLargestDigit(num = 1) {
        const length = String(num).length
        
        let counter = 1
        let result = 0

        while (counter < length && result !== 9) {
            result = this.getNumDigit(num, counter)
            counter++
        }

        return result
    }

    findNumListAveragePairs(list = [], num = 1) {
        const length = list.length
        let result = []

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length; j++) {
                if (i !== j) {
                    let current = list[i]
                    let next = list[j]
                    let value = Math.round((current + next) / 2)
                    let pair = current < next ? [current, next] : [next, current]

                    if (value === num && result.find(el => el[0] === pair[0] && el[1] === pair[1]) === undefined) {
                        result = [...result, pair]
                    }
                }
            }
        }

        return result
    }

    generateNumByDigitsRandomly(list = [], size = 1, isUniq = true) {
        let result = 0

        for (let i = 0; i < size; i++) {
            let digit = list[Math.floor(list.length * Math.random())]
        
            if (isUniq) {
                let prev = this.getNumDigit(result, i)
       
                while (digit === prev) {
                    digit = list[Math.floor(list.length * Math.random())]
                }
            }

            result += digit * 1e1**i
        }

        return result
    }

    findNumDistanceByDifference(list = [], percent = 1e1) {
        let max = Math.max(...list)
        let min = Math.min(...list)
        let difference = Math.abs(max - min)
        let deviation = 1e5
        let result = []

        difference = this.cleanValue(percent, difference, 0)

        for (let i = 0; i < list.length; i++) {
            for (let j = 0; j < list.length; j++) {
                let value = Math.abs(list[j] - list[i])
                let odds = Math.abs(value - difference)
       
                if (odds < deviation) {
                    result = [i, j]
                    deviation = odds
                }
            }
        }

        return result
    }

    findNumLargestCompareSubsequence(list = [], num = 1, isMore = true) {
        let result = []
        let seq = []
        let maxlength = 0

        list.map(el => {
            let check = isMore && num > el || !isMore && num < el

            if (check) {
                seq = [...seq, el]
            } else {
                seq = []
            }

            if (seq.length > maxlength) {
                result = seq
                maxlength = seq.length
            }
        })

        return result
    }

    findNumMultiplicityList(list = [], num = 1) {
        let result = []

        list.map(el => {
            let value = el % num

            if (!Boolean(value)) {
                result = [...result, el]
            }
        })

        return result
    }

    numPercentBorders(num = 1, percent = 1e1, round = 0) { 
        let size = this.cleanValue(percent, num, round)
        let result = [num - size, num + size]
    
        return result
    }
}

module.exports = Core