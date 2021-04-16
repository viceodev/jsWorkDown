// The continue statement is used to restart a loop or better still skips an iteration when the condition passed to the continue block is true;


// Example


let arr = ['cat', 'dog', 'chicken', 'fish', 'duck'];

for(let i = 0; i < arr.length; i++){
    
    if(i === 1){
        continue;
    }
    
    console.log(arr[i])
}