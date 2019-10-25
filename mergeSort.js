
// MERGE SORT

// This function sorts an array using the merge sort approach.

function mergeSort(arr) {
    // base case is when the array is empty or has only one item
    if (arr.length === 0 || arr.length === 1) {
        return arr
    }
    // in the recursive case, we split the array in half, sort the halves, then combine them again in a sorting way.
    let middleIndex = Math.floor(arr.length / 2)
    let sortedFirstHalf = mergeSort(arr.slice(0, middleIndex))
    let sortedSecondHalf = mergeSort(arr.slice(middleIndex))
    let firstPointer = 0
    let secondPointer = 0
    let combinedArr = []
    while (firstPointer < sortedFirstHalf.length || secondPointer < sortedSecondHalf.length) {
        if (secondPointer >= sortedSecondHalf.length || sortedFirstHalf[firstPointer] <= sortedSecondHalf[secondPointer]) {
            combinedArr.push(sortedFirstHalf[firstPointer])
            firstPointer++
        }
        else {
            combinedArr.push(sortedSecondHalf[secondPointer])
            secondPointer++
        }
    }
    return combinedArr
}

// test arrays

let array0 = []
let array1 = [6]
let array2 = [8, 4]
let array3 = [8, 5, 11]
let array4 = [9, 1, 84, 5]
let array6 = [3, 92, 6, 7, 10, 0]

console.log(mergeSort(array6))
console.log(mergeSort(array4))
console.log(mergeSort(array3))
console.log(mergeSort(array2))
console.log(mergeSort(array1))
console.log(mergeSort(array0))
