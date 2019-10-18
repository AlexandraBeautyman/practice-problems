
// Write a function that takes in an integer n and prints out the Fibonacci sequence up through the nth value.

// helper function to fill out the memo

function fillMemo(n, memo) {
    //console.log('memo', memo)
    if (memo.hasOwnProperty(n.toString())) return memo[n.toString()]
    if (n === 0) {
        memo['0'] = 0
        return 0
    }
    if (n === 1) {
        memo['0'] = 0
        memo['1'] = 1
        return 1
    }
    let nthValue = fillMemo(n - 1, memo) + fillMemo(n - 2, memo)
    memo[n.toString()] = nthValue
    return nthValue
}

function printFib(n) {
    if (n < 0) {
        return null
    }
    let sequenceMemo = {}
    fillMemo(n, sequenceMemo)
    for (let i = 0; i < n + 1; i++) {
        console.log(sequenceMemo[i.toString()])
    }
}

printFib(-24) //
printFib(0) // 0
printFib(1) // 0, 1
printFib(2) // 0, 1, 1
printFib(3) // 0, 1, 1, 2
printFib(4) // 0, 1, 1, 2, 3
printFib(5) // 0, 1, 1, 2, 3, 5
printFib(6) // 0, 1, 1, 2, 3, 5, 8
printFib(7) // 0, 1, 1, 2, 3, 5, 8, 13
printFib(8) // 0, 1, 1, 2, 3, 5, 8, 13, 21
