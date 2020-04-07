function getQuotient(forThisValue) {
    let quotient = Math.floor(forThisValue / 2)
    return quotient
}

function getRemainder(forThisValue) {
    let remainder = forThisValue % 2
    return remainder
}

function decimalToBinary(decimalValue) {

    let quotientReturned = 0
    let remainderReturned = 0
    let binaryValue = ""

    do {
        quotientReturned = getQuotient(decimalValue)
        remainderReturned = getRemainder(decimalValue)
        binaryValue = remainderReturned.toString() + binaryValue
        //Set up the next loop iteration if the quotient is not zero
        decimalValue = quotientReturned
    } while (quotientReturned !== 0)

    return binaryValue

}

let testData = 55

let binaryValue = decimalToBinary(testData)

console.log(`The Binary value for ${testData} is ${binaryValue}`)

// let valueReturned = decimalToBinary(testData)