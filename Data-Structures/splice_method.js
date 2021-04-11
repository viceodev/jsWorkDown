// This function helps eliminate elements at a specific index in array. 

// It takes in 2 Parameter when you want to eliminate an index a number of times

let arr =  ['make', 'me', 'odd', 'odd', 'code', 'better'];

arr.splice(2,4);

console.log(arr);

// The splice function also returns an array of the deleted items.

arr =  ['make', 'me', 'odd', 'odd', 'code', 'better'];

let deletedItem = arr.splice(2,4);

console.log(deletedItem);


// This function takes in 3 parameters when you want to replace an index in an array.

arr =  ['make', 'me', 'odd', 'odd'];

arr.splice(2, 3, 'code', 'better');

console.log(arr);
