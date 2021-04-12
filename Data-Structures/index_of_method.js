// This function helps us to quickly and easily check if an element is in an array. 

// As the name implies, it also returns the index of the element if it exists

// Example: We defined a function called IndexChecker that will check the index of an element in array as given in the argument;


let IndexChecker =  function(arr, elem){
    let query = arr.indexOf(elem);

    return query;
}


console.log(IndexChecker(['make', 'me', 'code', 'better', 'odd'], 'odd'));