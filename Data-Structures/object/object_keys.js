// This Object.keys() is method that allows you to iterate through the keys of an object and pull them up into an array.

// Example: We would write a function returns an array of all keys of a given object. 

let obj =  {
    PHP: ['Laravel', 'CakePHP', 'WordPress'],
    JavaScript: ['VueJs', 'React', 'Angular'],
}


let iterator =  function(obj){
    return Object.keys(obj);
}


console.log(iterator(obj));
