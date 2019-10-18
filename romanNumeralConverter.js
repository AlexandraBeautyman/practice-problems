
// ROMAN NUMERAL CONVERTER

// Write a function that takes in an integer and returns the equivalent Roman numeral.

let orderArray = [1000, 500, 100, 50, 10, 5, 1]

let romanDictionary = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
    1000: 'M',
    500: 'D',
    100: 'C',
    50: 'L',
    10: 'X',
    5: 'V',
    1: 'I'
}

function convertToRN(num) {
    let romanString = ''
    let remainder = num
    let i = 0
    while (remainder > 0) {
        let orderOfMag = orderArray[i]
        let numOfCurrentOrder = Math.floor(remainder / orderOfMag)
        for (let j = 0; j < numOfCurrentOrder; j++) {
            romanString += romanDictionary[orderOfMag.toString()]
        }
        remainder = remainder % orderOfMag
        if (orderOfMag - remainder <= orderOfMag / 10 && i % 2 === 0) {
            let subtractionValue = orderArray[i + 2]
            romanString += romanDictionary[subtractionValue.toString()] + romanDictionary[orderOfMag.toString()]
            remainder = remainder - orderOfMag + subtractionValue
        }
        else if (orderOfMag - remainder <= orderOfMag / 5 && i % 2 === 1) {
            let subtractionValue = orderArray[i + 1]
            romanString += romanDictionary[subtractionValue.toString()] + romanDictionary[orderOfMag.toString()]
            remainder = remainder - orderOfMag + subtractionValue
        }
        i++
    }
    return romanString
}

// console.log(convertToRN(1)) // I
// console.log(convertToRN(2)) // II
// console.log(convertToRN(4)) // IV (special case)
// console.log(convertToRN(9)) // IX (special case)
// console.log(convertToRN(10)) // X
// console.log(convertToRN(11)) // XI
// console.log(convertToRN(38)) // XXXVIII
// console.log(convertToRN(45)) // XLV (special case)
// console.log(convertToRN(50)) // L
// console.log(convertToRN(91)) // XCI (special case)
// console.log(convertToRN(94)) // XCIV (special case)
// console.log(convertToRN(100)) // C
// console.log(convertToRN(178)) // CLXXVIII
// console.log(convertToRN(999)) // CMXCIX (special case)
// console.log(convertToRN(1001)) // MI


// Write a function that receives a Roman numeral and returns an integer.

function convertFromRN(romanString) {
    let returnValue = 0
    for (let i = 0; i < romanString.length; i++) {
        let valueOfChar = romanDictionary[romanString[i]]
        let valueOfNextChar = 0
        if (i < romanString.length - 1) {
            valueOfNextChar = romanDictionary[romanString[i + 1]]
        }
        if (valueOfNextChar > valueOfChar) {
            let valueToAdd = valueOfNextChar - valueOfChar
            returnValue += valueToAdd
            i++
        }
        else {
            returnValue += valueOfChar
        }
    }
    return returnValue
}

console.log(convertFromRN('III')) // 3
console.log(convertFromRN('IV')) // 4
console.log(convertFromRN('IX')) // 9
console.log(convertFromRN('XL')) // 40
console.log(convertFromRN('XC')) // 90
console.log(convertFromRN('CDXI')) // 411
console.log(convertFromRN('CMLXXIII')) // 973
