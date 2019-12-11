
// MUMBLING (Codewars 7 kyu)

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(str) {
    //   Note about time complexity: Other languages have data structures to deal with the expense of repeated string concatenation (i.e. StringBuilder in Java). My understanding is that Javascript has some efficiency built into its + operator. If this is NOT the case, then the code below has a time complexity of O(n^4), which is extremely expensive. The reason for this is that, with basic string concatenation, the component strings both have to be copied over into a whole new string each time the string is updated.

    //   I also considered writing this code by pushing new characters into an array, then joining the array into a string at the end. If join is no more efficient than basic string concatenation, this leaves us in the same place, with O(n^4) time complexity. However, there may be some efficiency built into the join method, in which case that could be an improvement (depending, of course, on how Javascript approaches string concatenation under the hood).
    let newString = ''
    for (let i = 0; i < str.length; i++) {
        newString += str[i].toUpperCase()
        let repeatedChar = str[i].toLowerCase()
        for (let j = 0; j < i; j++) {
            newString += repeatedChar
        }
        newString += '-'
    }
    return newString.slice(0, newString.length - 1)
}


// TEST CASES

let str0 = ''
let str1 = 'A'
let str2 = 'aB'
let str3 = 'ABc'
let str4 = 'abcD'
let str5 = 'aBcDe'
let str6 = 'ABCdeF'

console.log(accum(str0)) // ''
console.log(accum(str1)) // 'A'
console.log(accum(str2)) // 'A-Bb'
console.log(accum(str3)) // 'A-Bb-Ccc'
console.log(accum(str4)) // 'A-Bb-Ccc-Dddd'
console.log(accum(str5)) // 'A-Bb-Ccc-Dddd-Eeeee'
console.log(accum(str6)) // 'A-Bb-Ccc-Dddd-Eeeee-Ffffff'
