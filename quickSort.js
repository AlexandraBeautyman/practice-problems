
// QUICK SORT

// This function uses the quick sort method to sort an array.

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

console.log(quickSort(array6))
