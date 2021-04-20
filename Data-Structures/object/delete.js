// You can remove or delete key-value pairs from an object using the delete keyword


// Example: We would define a simple function that console logs an object after removing from it the passed key to be removed.


let jsFamily = {
    db: 'MongoDB',
    frontEnd: ['Vue', 'React', 'Angular'],
    BackEnd: ['Node Js', 'Express'],
    odd: 'Laravel'
}

let remover =  function(object, key){
    // Console log Before delete
    console.log(jsFamily);

    delete object[key];

    // Console log after delete
    console.log(object);
}


remover(jsFamily, 'odd');