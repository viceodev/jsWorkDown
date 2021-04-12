// The for loop helps us to have a better control over iterations


/* 

The for loop takes in three parameters

1. The first is used to initialize a variable that will incremented to make sure the loop keeps running

2. The second is the condition that has to be met for the loop to keep running.

3. The third increments the initalized variable
*/


// Example: We would define a function that increments each elements in a given array by 1.

let incrementor =  function(arr){

    let newArr = [];

    for(let i = 0; i < arr.length; i++){
        newArr.push(arr[i] + 1);
    }

    return newArr;
}

console.log(incrementor([0,1,2,3,4,5,6,7,8,9]));


