// The hasOwnProperty method can be used to check if a key exists in an object.


// Example: We would write a function that checks if a passed argument or key is in an object

let stacks = {
    db: 'MongoDB',
    frontEnd: ['Vue', 'React', 'Angular'],
    BackEnd: ['Node Js', 'Express']
}

let checker =  function(obj, key){
    if(obj.hasOwnProperty(key)){
        console.log(`${key} exists in the passed object`);
    }else{
        console.log(`${key} does not exist in the passed object`);
    }
}


checker(stacks, 'frontEnd');