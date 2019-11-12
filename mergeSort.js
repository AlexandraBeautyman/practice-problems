
// MERGE SORT

// This function sorts an array using the merge sort approach. It has a space complexity of O(n*log(n)) because it uses slice on the way as it builds up the callstack.

function mergeSort1(arr) {
    // base case is when the array is empty or has only one item
    if (arr.length === 0 || arr.length === 1) {
        return arr
    }
    // in the recursive case, we split the array in half, sort the halves, then combine them again in a sorting way.
    let middleIndex = Math.floor(arr.length / 2)
    let sortedFirstHalf = mergeSort1(arr.slice(0, middleIndex))
    let sortedSecondHalf = mergeSort1(arr.slice(middleIndex))
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

// console.log(mergeSort1(array6))
// console.log(mergeSort1(array4))
// console.log(mergeSort1(array3))
// console.log(mergeSort1(array2))
// console.log(mergeSort1(array1))
// console.log(mergeSort1(array0))


// The below implementation uses pointers instead of slice. It has a space complexity of O(n).

function mergeSortWithP(arr, start, length) {
    if (start >= length - 1) return arr
    let middleIndex = Math.floor((length - start) / 2)
    let firstLength = middleIndex + start
    let secondStart = start + middleIndex
    let arrWithFirstHalfSorted = mergeSortWithP(arr, start, firstLength)
    let arrWithSecondHalfSorted = mergeSortWithP(arr, secondStart, length)
    let arrayCopy = []
    for (let i = 0; i < middleIndex; i++) {
        arrayCopy.push(arrWithFirstHalfSorted[i])
    }
    for (let i = middleIndex; i < arrWithSecondHalfSorted.length; i++) {
        arrayCopy.push(arrWithSecondHalfSorted[i])
    }
    let startingPoint = start
    while (start < firstLength && secondStart < length) {
        if (arrWithFirstHalfSorted[start] < arrWithSecondHalfSorted[secondStart]) {
            arrayCopy[startingPoint] = arrWithFirstHalfSorted[start]
            start++
            startingPoint++
        }
        else {
            arrayCopy[startingPoint] = arrWithSecondHalfSorted[secondStart]
            secondStart++
            startingPoint++
        }
    }
    while (start < firstLength) {
        arrayCopy[startingPoint] = arrWithFirstHalfSorted[start]
        start++
        startingPoint++
    }
    return arrayCopy
}

function sortWithP(arr) {
    return mergeSortWithP(arr, 0, arr.length)
}

// console.log(sortWithP(array6)) // [0, 3, 6, 7, 10, 92]
// console.log(sortWithP(array4)) // [1, 5, 9, 84]
// console.log(sortWithP(array3)) // [5, 8, 11]
// console.log(sortWithP(array2)) // [4, 8]
// console.log(sortWithP(array1)) // [6]
// console.log(sortWithP(array0)) // []

// Note about space complexity and recursion: This later algorithm  makes O(n) recursive calls. Within each call, it creates a new array whose length is between 0 and n. If these arrays were being created on the way up – that is, as the call stack was being built up – they would all exist simultaneously in memory, and we would end up with a space complexity of O(n*log(n)). That being said, in this case, the new arrays are created on the way down, as the call stack is collapsing. In theory, then, we could reuse the space, and the space complexity is the callstack itself (O(n)), plus the space taken up by the largest newly created array, also O(n).

// This contrasts with the first algorithm, which also creates new arrays as the callstack collapses, but in addition uses the slice method on the way up.

// One way to sidestep this issue of memory cleanup entirely is to make a single helper array at the beginning and fill parts of it in as needed at the various levels of the call stack, rather than creating new helper arrays as we come down the call stack. Then, while we are still doing the time work at each level, we can be confident we aren't using up any additional space. The below function implements this approach.

// Here is a helper function that does the recursive breaking down.

function split(array, helper, start, end) {
    //console.log('start', start, 'end', end)
    if (start < end) {
        let middle = start + Math.floor((end - start) / 2)
        split(array, helper, start, middle)
        split(array, helper, middle + 1, end)
        return merge(array, helper, start, middle, end)
    }
}

// Here is a helper function that does the building back up.

function merge(array, helper, start, middle, end) {
    // console.log('hit merge')
    // console.log('array', array)
    // console.log('helper', helper)
    // console.log('start', start, 'middle', middle, 'end', end)
    // copy relevant portion of array over to helper
    for (let i = start; i <= end; i++) {
        helper[i] = array[i]
    }
    // set up your pointers
    let leftPointer = start
    let rightPointer = middle + 1
    let current = start
    // pull the smaller value from helper into the main array
    while (leftPointer <= middle && rightPointer <= end) {
        if (helper[leftPointer] <= helper[rightPointer]) {
            array[current] = helper[leftPointer]
            leftPointer++
        }
        else {
            array[current] = helper[rightPointer]
            rightPointer++
        }
        current++
    }
    // if there remain values in the left section, copy them over. if values remain in the right section, they are already there!
    while (leftPointer <= middle) {
        array[current] = helper[leftPointer]
        leftPointer++
        current++
    }
    return array
}

function mergeSort(arr) {
    if (arr.length < 2) return arr
    let helper = new Array(arr.length)
    return split(arr, helper, 0, arr.length - 1)
}

console.log(mergeSort(array6)) // [0, 3, 6, 7, 10, 92]
console.log(mergeSort(array4)) // [1, 5, 9, 84]
console.log(mergeSort(array3)) // [5, 8, 11]
console.log(mergeSort(array2)) // [4, 8]
console.log(mergeSort(array1)) // [6]
console.log(mergeSort(array0)) // []
