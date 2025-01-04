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
}

module.exports = Core