// The labelled statement is not an iterator in real sense but is used to label a loop for referrence.

// Example: We would create a function that iterates through an array and we won't allow it to be completed because we would break the loop to demonstrate how the label statement can be used.


let iterator = function(){

    let num = 0;
    let arr = [];
    
    arrLooper:
    while(arr.length < 5){
        arr.push(num);
        console.log(`This is the arrLooper number at: ${num}`);
        num++;
        
        arrInnerLooper:
        for(i = 0; i <= 3; i++){
            if( num < 2){
                console.log(`This is the number break for arrInnerLooper: ${num}`);
                break arrInnerLooper;//This breaks the arrInnerLooper
            }

            if(num < 3){
                console.log(`This is the number break for arrLooper: ${num}`);
                break arrLooper;//This breaks the arrLooper;
            }
        }
    }
}


iterator();