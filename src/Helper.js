class Helper {
    percent(value = 0, total = 1e2, round = 1) {
        let result = value / total * 1e2
        
        return this.toRound(result, round)
    }

    cleanValue(value = 0, total = 1e2, round = 0) {
        let result = value / 1e2 * total

        return this.toRound(result, round)
    }

    toRound(result, round = 0) {
        return parseFloat(result.toFixed(round))
    }

    getNumDigit(num = 2e3, index = 1) {
        let result = Math.floor(num % 1e1**index / 1e1**(index - 1))

        return result
    }

    getIntervalValue(borders = []) {
        return Math.floor(borders[0] + Math.round(Math.random() * Math.abs(borders[0] - borders[1])))
    }

    getCleanResidue(num = 1) {
        let value = String(num).split('.')[1]
        let length = value.length
        
        return Number(value) * 1e1**-length
    }
}

module.exports = Helper