// MAXIMUM SUB SQUARE MATRIX

// Given a matrix composed of zeros and ones, find the maximum subsquare matrix entirely made up of ones.

// EXAMPLE

// [
//     [0, 0, 1, 1, 1],
//     [1, 0, 1, 1, 1],
//     [0, 1, 1, 1, 1],
//     [1, 0, 1, 1, 1]
// ]
// => 3

// helper function for copying and enlarging the input matrix

function enlargeMatrix(matrix) {
    // make a new matrix that is a copy of the input matrix, but with an extra row of zeros on top and an extra column of zeros to the left
    let countingMatrix = []
    for (let i = 0; i <= matrix.length; i++) {
        let newRow = []
        for (let j = 0; j <= matrix[0].length; j++) {
            if (i === 0 || j === 0) {
                newRow.push(0)
            }
            else {
                newRow.push(matrix[i - 1][j - 1])
            }
        }
        countingMatrix.push(newRow)
    }
    return countingMatrix
}


// helper function to recalculate the value of a given subelement in the counting matrix

function recalculate(row, col, countingMatrix) {
    let smallestNeighborVal = countingMatrix[row][col - 1]
    if (countingMatrix[row - 1][col - 1] < smallestNeighborVal) {
        smallestNeighborVal = countingMatrix[row - 1][col - 1]
    }
    if (countingMatrix[row - 1][col] < smallestNeighborVal) {
        smallestNeighborVal = countingMatrix[row - 1][col]
    }
    return smallestNeighborVal + countingMatrix[row][col]
}


function maxSubSquare(matrix) {
    // if the input matrix is empty, return 0
    if (matrix.length === 0 || matrix[0].length === 0) return 0
    // assign a variable to keep track of the largest count
    let biggestSquareSize = 0
    let countingMatrix = enlargeMatrix(matrix)
    // starting at row 0, column 0, start calculating a value for each subelement in the counting matrix
    for (let i = 1; i < countingMatrix.length; i++) {
        for (let j = 1; j < countingMatrix[0].length; j++) {
            // each subelement should be given a value of the minimum of its N/W/NW neightbors, plus its own current value
            let newSum = recalculate(i, j, countingMatrix)
            countingMatrix[i][j] = newSum
            if (newSum > biggestSquareSize) biggestSquareSize = newSum
        }
    }
    return biggestSquareSize
}

// TEST CASES
// Input will always have subarrays of equal length

let test = [
    [0, 0, 1, 1, 1],
    [1, 0, 1, 1, 1],
    [0, 1, 1, 1, 1],
    [1, 0, 1, 1, 1]
]

let test0 = []
let test10 = [[]]
let test11 = [[1]]
let test21 = [[1], [1]]
let test64 = [
    [1, 0, 0, 1],
    [0, 1, 1, 1],
    [1, 1, 1, 0],
    [1, 1, 0, 0],
    [1, 1, 1, 1],
    [1, 0, 1, 0]
]

// console.log(maxSubSquare(test))
// console.log(maxSubSquare(test0))
// console.log(maxSubSquare(test10))
// console.log(maxSubSquare(test11))
// console.log(maxSubSquare(test21))
console.log(maxSubSquare(test64))
