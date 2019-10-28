
// DECK OF CARDS

// This function takes in an integer representating how many cards are in a deck and returns how many (nonzero) times you would have to (prefectly) shuffle the deck to end up in its original state.

function shuffle(size) {
    if (size < 2) return 'invalid deck'
    if (size === 2) return 1
    let calcSize = size
    if (size % 2 === 1) {
        calcSize++
    }
    // we only have to pay attention to one card (the card at index 1 is a good choice) to solve this problem. let's start by "shuffling" that one card once.
    let originalIndex = 1
    let tempIndex = 2
    let count = 1
    while (tempIndex !== originalIndex) {
        count++
        if (tempIndex < calcSize / 2) {
            tempIndex = tempIndex * 2
        }
        else {
            tempIndex = tempIndex - (calcSize - tempIndex - 1)
        }
    }
    return count
}

// odd sizes
console.log(shuffle(3)) // 2
console.log(shuffle(5)) // 4
console.log(shuffle(7)) // 3

// even sizes
console.log(shuffle(2)) // 1
console.log(shuffle(4))
console.log(shuffle(6)) // 4
console.log(shuffle(8)) // 3
console.log(shuffle(10)) // 6
console.log(shuffle(12)) // 10
console.log(shuffle(14))
console.log(shuffle(16))
console.log(shuffle(18))
console.log(shuffle(20))
console.log(shuffle(22))
console.log(shuffle(24))
console.log(shuffle(26))
console.log(shuffle(28))
console.log(shuffle(30))
console.log(shuffle(32))
console.log(shuffle(34))
console.log(shuffle(36))
console.log(shuffle(38))
console.log(shuffle(40))
console.log(shuffle(42))
console.log(shuffle(44))
console.log(shuffle(46))
console.log(shuffle(48))
console.log(shuffle(50))
console.log(shuffle(52)) // 8
