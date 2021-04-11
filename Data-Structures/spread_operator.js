// This is an ES6 feature that helps us copy and mix arrays easily.

// The spread operator is identified by three dots (...arr)

// The spread operator copies the content of an array into wherever it is placed 

// Example: We would write a function that takes in two argument. An array and a number. The array will be copied into another array the number of times as given by the number;


let copier = function(arr, num){
    let newArray = [];

    while(num >= 0){
        newArray.push(...arr);
        num--;
    }

    return newArray;
}

let arr = ['make', 'me', 'code', 'better'];


console.log(copier(arr, 6));


// You can also use the Spread Operator to mix and combine arrays

// Example: We would write a function that takes in two parameters which would be arrays. The function will return a combined array containing the contents of the arrays passed in the function argument.


let combiner =  function(arr1, arr2){
    let newArray =  [...arr1, arr2, 'it works just fine'];

    return newArray;
}


console.log(combiner(arr,arr));