// The .endsWith(str) checks if the given string ends with a given target passed as an arguement.


// Example

let checker =  function(str, target){
    return str.endsWith(target);
}

console.log(checker('This is a test string', 'string'));
console.log(checker('This is a test string', 'test'));