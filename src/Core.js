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

    getNumSymmmetric(digit = 1, size = 1) { 
        const middle = Math.floor(size / 2)
        let result = 0

        for (let i = 0; i < middle; i++) {
            let value = digit - i

            if (Boolean(value)) {
                result += value * 1e1**(size - i - 1) + value * 1e1**i
            }
        }

        return result
    }

    numListDeviationPercent(list = [], num = 1) {
        let result = 0

        list.map(el => {
            let value = Math.abs(el - num)

            result += value
        })
  
        result = Math.round((result / list.length) * 1e2) - 1e2

        return result
    }

    findNumDigitPercentFromAll(num = 1, digit = 1, round = 0) {
        let value = this.getNumDigit(num, digit)
        let result = this.percent(value * 1e1**(digit - 1), num, round)

        return result
    }

    numReverse(num = 1) {
        const length = String(num).length
        let result = new Array(length).fill(0)

        for (let i = 1; i <= length; i++) {
            let digit = this.getYearDigit(num, i)

            result[i] = digit
        }

        result = Number(result.join(''))

        return result
    }

    getNumDigitPart(num = 1, digit = 1) {
        let length = String(num).length
        let result = 0

        length = digit <= length ? digit : length

        for (let i = 1; i <= length; i++) {
            result += this.getNumDigit(num, i) * 1e1**(i - 1)
        }

        return result
    }

    exchangeNumListParts(list = []) {
        const length = list.length
        const border = length - 1

        let integers = new Array(length).fill(null)
        let residues = new Array(length).fill(null)
        let result = []

        list.map(el => {
            const integer = Math.floor(el)
            const residue = this.getCleanResidue(el)
         
            let integerIdx = this.getIntervalValue([0, border])
            let residueIdx = this.getIntervalValue([0, border])

            while (integerIdx === residueIdx || integers[integerIdx] !== null || residues[residueIdx] !== null) {
                integerIdx = this.getIntervalValue([0, border])
                residueIdx = this.getIntervalValue([0, border])
            }

            integers[integerIdx] = integer
            residues[residueIdx] = residue
        })

        integers.map((el, idx) => {
            result[idx] = el + residues[idx]
        })

        return result
    }

    numRound(num = 1, min = 0, max = 1, forward = 1, back = 1) {
        let result = this.getCleanResidue(num)
        let flag = result >= min && result <= max
        let divider = flag ? forward : back

        result = Math[flag ? 'ceil' : 'floor'](num / divider) * divider

        return result
    }

    filterNumListByRangePercent(list = [], num = 1, from = 1, to = 1e1) {
        let max = Math.max(...list)
        let min = Math.min(...list)
        let range = Math.abs(max - min)
        let result = []

        min = this.cleanValue(from, range, 0)
        max = this.cleanValue(to, range, 0)

        list.map(el => {
            let difference = Math.abs(el - num)

            if (difference >= min && difference <= max) {
                result = [...result, el]
            }
        })

        return result
    }

    generateNumByMultipliersRandomly(list = [], size = 1) {
        const getValue = () => list[Math.floor(Math.random() * length)]
        const length = list.length

        let result = 1        
        
        size = length < size ? length : size

        for (let i = 0; i < size; i++) {
            let value = getValue()

            while (!Boolean(result % value)) {
                value = getValue()
            }

            result *= value
        }

        return result
    }

    findNumListAllPairsByMultiplicity(list = [], num = 1) { 
        const length = list.length
        let result = []

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length; j++) {
                if (i !== j) {
                    let current = list[i]
                    let next = list[j]

                    let value = current * next
                    let pair = current < next ? [current, next] : [next, current]

                    if (value % num === 0 && result.find(el => el[0] === pair[0] && el[1] === pair[1]) === undefined) {
                        result = [...result, pair]
                    }
                }
            }
        }

        return result
    }

    findNumListMaxRangeByMultiplicity(list = [], num = 1) {
        const length = list.length
        
        let result = []
        let difference = 0

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length; j++) {
                if (i !== j) {
                    let current = list[i]
                    let next = list[j]

                    let value = Math.abs(current - next)

                    if (value % num === 0 && value > difference) {
                        result = current < next ? [current, next] : [next, current]
                        difference = value
                    }
                }
            }
        }

        return result
    }

    filterNumListByFractionalPart(list = [], min = 0, max = 1, num = 1) {
        let result = []

        list.map(el => {
            let value = this.getCleanResidue(el)
            let flag = Math.round(value * 1e2) % num === 0
         
            if (value >= min && value <= max && flag) {
                result = [...result, el]
            }
        })

        return result
    }
    
    findNumListLargestFractionalBaseDifference(list = []) {
        let difference = 0
        let result = 0
        
        list.map(el => {
            let base = Math.floor(el)
            let fraction = this.getCleanResidue(el)
            
            let value = base / fraction
            
            if (value > difference) {
                difference = value
                result = el
            }
        })

        return result
    }
    
    findNumLargestSubsequenceBySchemaChanges(list = [], schema = []) {
        let result = []
        let seq = []
        
        let pointer = 0
        let index = 0

        list.map((el, idx) => {
            let value = schema[index]
            let flag = !Boolean(idx) || value ? el > pointer : el < pointer
            
            if (flag) {
                seq = [...seq, el]
                index = Boolean(idx) ? index + 1 : index
            } else {

                if (seq.length > result.length) {
                    result = seq
                }

                seq = [el]
                index = 0
            }

            pointer = el
        })

        return result
    }

    updateNumFractionalPartRandomly(num = 1, from = 0, to = .5, accuracy = 1) {
        let result = Math.floor(num / 1)

        from = Math.floor(from * 1e1**accuracy) 
        to = Math.floor(to * 1e1**accuracy)

        result += this.getIntervalValue([from, to]) * 1e1**-accuracy

        return result
    }

    transformNumByPartsExhange(num = 1) { 
        let result = this.getCleanResidue(num)

        while (result % 1 !== 0) {
            result *= 1e1
        }
  
        num = Math.floor(num / 1)

        while (num > 1) {
            num *= .1
        }
     
        result += num

        return result
    }

    findNearestPairByDynamicRatio(list = [], ratio = 1) {
        const length = list.length

        let result = []
        let difference = ratio

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length; j++) {
                if (i !== j) {
                    let current = list[i]
                    let next = list[j]
                    let flag = current < next

                    let pair = flag ? [current, next] : [next, current]
                 
                    if (ratio > 1 && flag || ratio < 1 && !flag) {
                        pair = pair.reverse()
                    } 
              
                    let toCompare = pair[0] / pair[1]
                
                    toCompare = Math.abs(ratio - toCompare)
                   
                    if (toCompare < difference) {
                        difference = toCompare
                        result = pair
                    }
                }
            } 
        }

        return result
    }

    buildNumListByChainSchema(num = 1, schema = [], forward = 1, back = 1) {
        const max = num + forward
        const min = num - back
        
        let increase = num
        let decrease = num
        let result = []
        
        schema.map(isIncrease => {
            let borders = [isIncrease ? increase : decrease, isIncrease ? max : min]
 
            if (!isIncrease) {
                borders = borders.reverse()
            }

            let value = this.getIntervalValue(borders)

            result = [...result, value]

            if (isIncrease) {
                increase = value
            } else {
                decrease = value
            }
        })

        return result
    }

    calculateNumBySchemaOperationsAndListRandomly(num = 1, schema = [], list = []) {
        const length = list.length - 1
        let result = num

        schema.map(operation => {
            let value = list[this.getIntervalValue([0, length])]

            result = eval(`${result}${operation}${value}`)
        })

        return result
    }

    buildNumListByProgressionSchema(num = 1, schema = [], arithmetic = 1, geometric = 1, isIncrease = true) {
        let result = [num]

        schema.map(isArithmetic => {
            if (isArithmetic) {
                num = isIncrease ? num + arithmetic : num - arithmetic
            } else {
                num *= geometric
            }

            result = [...result, num]
        })

        return result
    }

    filterNumListByFractionalPartLatestDigit(list = [], from = 1, to = 1) {
        let result = []

        list.map(el => {
            let value = el

            while (value % 1 !== 0) {
                value *= 1e1
            }
          
            let digit = this.getNumDigit(value, 1)
    
            if (digit >= from && digit <= to) {
                result = [...result, el]
            }
        })

        return result
    }

    numFactorialMultiplicity(value = 1, num = 1) {
        let pointer = num
        let result = 1

        while (pointer < value) {
            result *= pointer

            pointer += num
        }

        return result
    }

    findNumListUltraByMultiplicitySchema(list = [], schema = [], isMax = true) {
        const check = (current, prev) => isMax ? current > prev : current < prev
        
        const length = schema.length
        const base = isMax ? 0 : Math.max(...list)
        
        let result = new Array(length).fill(base)
        let index = 0

        list.map(el => {
            let num = schema[index]

            if (el % num === 0) {
                const prev = result[index]
                const flag = check(el, prev)

                if (flag) {
                    result[index] = el
                }

                index = index < length - 1 ? index + 1 : 0
            }
        })

        return result
    }

    checkNumMultiplicity(num = 1, base = 1, fractional = 1) {
        const value = Math.floor(num / 1)

        let result = value % base === 0 
        let pointer = 0

        while (num % 1 !== 0) {
            num *= 1e1
            pointer++
        }

        result = (num - value*1e1**pointer) % fractional*1e1**pointer === 0 && result
        
        return result
    }

    findNumLargestSubsequenceByFractionalSchemaChanges(list = [], schema = []) {       
        let result = []
        let seq = []
        let index = 0
        let pointer = 0

        list.map(el => {
            let isMore = schema[index]
            let value = this.getCleanResidue(el)
        
            let flag = index < schema.length && isMore && value > pointer || !isMore && value < pointer
         
            if (flag) {
                seq = [...seq, el]
                index += 1
            } else {
                if (seq.length > result.length) {
                    result = seq
                }

                seq = [el]
                index = 0
            }

            pointer = value
        })

        return result
    }

    numListByAllPartsPercent(max = 1e3, parts = [], round = 2) {
        let result = []

        parts.map(el => {
            let value = this.cleanValue(el, max, 0) + el*1e-2

            result = [...result, this.toRound(value, round)]
        })

        return result
    }

    getNumListRangeIndex(list = [], size = 1, round = 2) {
        const border = Math.floor(list.length / size)
        let result = []

        for (let i = 0; i < border; i++) {
            let part = list.slice(i * size, (i + 1) * size)
            let value = Math.abs(Math.max(...part) - Math.min(...part))

            result = [...result, value]
        } 
        
        result = Math.max(...result) / Math.min(...result)
        result = this.toRound(result, round)

        return result
    }

    generateNumByBaseRandomly(base = 1, digits = 1) {
        let result = base
        let pointer = 0

        while (1e1**pointer < base) {
            pointer++
        }

        let max = pointer + digits 

        while (pointer < max) {
            result += this.getIntervalValue([1, 9]) * 1e1**pointer
            pointer++
        }

        return result
    }

    findNearestMultiplierOfNum(start = 1, end = 1, list = []) {
        const multiplier = Math.round(end / start)
        
        let difference = multiplier
        let result = 0

        list.map(el => {
            let value = Math.abs(el - multiplier)

            if (value < difference) {
                difference = value
                result = el
            }
        })

        return result
    }
}

module.exports = Core