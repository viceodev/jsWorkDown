// The for in loop is used to iterate over object property.



let iterator =  function(object){
    for(let i in object){
        console.log(`Profile.${i}: ${object[i]}`);
    }
}


iterator({
    name : 'Viceo',
    country: 'Nigeria',
    stacks: ['PHP','JavaScript', 'SASS', 'WordPress'] 
}, );



