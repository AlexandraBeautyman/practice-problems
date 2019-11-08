
// QUICK SORT

// This function uses the quick sort method to sort an array. This approach has a space complexity of O(n*log(n)).

function quickSort(arr) {
    // base case is when the array is empty or only has one value
    if (arr.length === 0 || arr.length === 1) {
        return arr
    }
    // recursive case is when you choose a pivot and break the array down around it
    let pivot = arr[0]
    let smaller = []
    let larger = []
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= pivot) {
            larger.push(arr[i])
        }
        else {
            smaller.push(arr[i])
        }
    }
    let sortedSmaller = quickSort(smaller)
    let sortedLarger = quickSort(larger)
    return (sortedSmaller.concat([pivot], sortedLarger))
}

// test arrays

let array0 = []
let array1 = [6]
let array2 = [8, 4]
let array3 = [8, 5, 11]
let array4 = [9, 1, 84, 5]
let array6 = [3, 92, 6, 7, 10, 0]

// console.log(quickSort(array6))
// console.log(quickSort(array4))
// console.log(quickSort(array3))
// console.log(quickSort(array2))
// console.log(quickSort(array1))
// console.log(quickSort(array0))


// Here is another approach. It uses pointers, and a tempCopy of the current portion of the array being considered. The time complexity is O(n*log(n)), and the space complexity is also O(n*log(n)).

function qSort(arr, start = 0, end = arr.length) {
    if (end - start < 2) return arr
    let tempCopy = arr.slice(start, end)
    let currentIndex = start
    for (let i = 0; i < tempCopy.length; i++) {
        if (tempCopy[i] < tempCopy[0]) {
            arr[currentIndex] = tempCopy[i]
            currentIndex++
        }
    }
    arr[currentIndex] = tempCopy[0]
    let pivotIndex = currentIndex
    currentIndex++
    for (let i = 0; i < tempCopy.length; i++) {
        if (tempCopy[i] > tempCopy[0]) {
            arr[currentIndex] = tempCopy[i]
            currentIndex++
        }
    }
    qSort(arr, start, pivotIndex)
    qSort(arr, pivotIndex + 1, end)
    return arr
}

// console.log(qSort(array6)) // [0, 3, 6, 7, 10, 92]
// console.log(qSort(array4)) // [1, 5, 9, 84]
// console.log(qSort(array3)) // [5, 8, 11]
// console.log(qSort(array2)) // [4, 8]
// console.log(qSort(array1)) // [6]
// console.log(qSort(array0)) // []


// Here is a third approach. This one does everything in place, thereby reducing the space complexity to O(log(n)).

function qSortIP(arr, start = 0, end = arr.length) {
    //console.log('ARR', arr, 'START', start, 'END', end)
    if (end - start < 2) return arr
    let pivotIndex = start
    let smallPointer = start + 1
    let bigPointer = end - 1
    let lastSmall
    while (smallPointer < bigPointer) {
        if (arr[smallPointer] > arr[pivotIndex] && arr[bigPointer] < arr[pivotIndex]) {
            // swap
            let temp = arr[smallPointer]
            arr[smallPointer] = arr[bigPointer]
            arr[bigPointer] = temp
            lastSmall = smallPointer
            smallPointer++
            bigPointer--
        }
        else if (arr[smallPointer] > arr[pivotIndex]) {
            bigPointer--
        }
        else if (arr[bigPointer] < arr[pivotIndex]) {
            smallPointer++
        }
        else {
            smallPointer++
            bigPointer--
        }
    }
    if (arr[smallPointer] < arr[pivotIndex]) {
        lastSmall = smallPointer
    }
    else {
        lastSmall = smallPointer - 1
    }
    let tempVal = arr[lastSmall]
    arr[lastSmall] = arr[pivotIndex]
    arr[pivotIndex] = tempVal
    qSortIP(arr, start, lastSmall)
    qSortIP(arr, lastSmall + 1, end)
    return arr
}

let array8 = [6, 0, 1, 98, 104, 17, 2, 800]

console.log(qSortIP(array6)) // [0, 3, 6, 7, 10, 92]
console.log(qSortIP(array4)) // [1, 5, 9, 84]
console.log(qSortIP(array3)) // [5, 8, 11]
console.log(qSortIP(array2)) // [4, 8]
console.log(qSortIP(array1)) // [6]
console.log(qSortIP(array0)) // []
console.log(qSortIP(array8)) // [0, 1, 2, 6, 17, 98, 104, 800]
