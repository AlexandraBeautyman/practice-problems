// SNAIL SORT

// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]

// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]

// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

// NOTE 2: The 0x0 (empty matrix) is represented as an empty array inside an array [[]].


// SOLUTION

// helper function to change directions if need be
function updateDirection(direction, rowData, colData) {
    if (direction === 'forward') {
        if (colData.current === colData.end) {
            direction = 'down'
            rowData.start++
        }
    }
    else if (direction === 'down') {
        if (rowData.current === rowData.end) {
            direction = 'backward'
            colData.end--
        }
    }
    else if (direction === 'backward') {
        if (colData.current === colData.start) {
            direction = 'up'
            rowData.end--
        }
    }
    else if (rowData.current === rowData.start) {
        direction = 'forward'
        colData.start++
    }
    return direction
}

// helper function to update the current indices
function stepForward(direction, rowData, colData) {
    if (direction === 'forward') {
        colData.current++
    }
    else if (direction === 'down') {
        rowData.current++
    }
    else if (direction === 'backward') {
        colData.current--
    }
    else {
        rowData.current--
    }
    return [direction, rowData, colData]
}

function snailSort(arr) {
    if (arr.length === 0 || arr.length === 1) return arr[0]
    let rowData = {
        current: 0,
        start: 0,
        end: arr.length - 1
    }
    let colData = {
        current: 0,
        start: 0,
        end: arr[0].length - 1
    }
    let newArr = []
    let direction = 'forward'
    while (rowData.start < rowData.end || colData.start < colData.end) {
        newArr.push(arr[rowData.current][colData.current])
        direction = updateDirection(direction, rowData, colData)
        stepForward(direction, rowData, colData)
    }
    newArr.push(arr[rowData.current][colData.current])
    return newArr
}


// TEST CASES

let arr0 =
[
    []
]

let arr1 =
[
    [0]
]

let arr3 =
[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
]

let arr4 =
[
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15]
]

let arr5 =
[
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24]
]

let arr6 = [
    [0, 1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11],
    [12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22, 23],
    [24, 25, 26, 27, 28, 29],
    [30, 31, 32, 33, 34, 35]
]

console.log(snailSort(arr0)) // []
console.log(snailSort(arr1)) // [1]
console.log(snailSort(arr3)) // [0, 1, 2, 5, 8, 7, 6, 3, 4]
console.log(snailSort(arr4)) // [0, 1, 2, 3, 7, 11, 15, 14, 13, 12, 8, 4, 5, 6, 10, 9]
console.log(JSON.stringify(snailSort(arr5))) // [0, 1, 2, 3, 4, 9, 14, 19, 24, 23, 22, 21, 20, 15, 10, 5, 6, 7, 8, 13, 18, 17, 16, 11, 12]
console.log(JSON.stringify(snailSort(arr6))) // [0, 1, 2, 3, 4, 5, 11, 17, 23, 29, 35, 34, 33, 32, 31, 30, 24, 18, 12, 6, 7, 8, 9, 10, 16, 22, 28, 27, 26, 25, 19, 13, 14, 15, 21, 20]
