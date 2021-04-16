// The for of loop is used to on any iterable object such as

// 1. Arrays
// 2. Map e.t.c

// The for of loop iterates over value not property as the for in loop does


// Example: We would create function that console logs the iterations of any kind of iterable object
let arr = ['make', 'me', 'code', 'better'];

arr.push('odd');

let iterator = function (object){
    for(let single of object){
        console.log(single);
    }
}



iterator(arr);
