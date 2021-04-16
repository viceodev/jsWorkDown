// The break statement is used to break a loop before it gets to its final cycle


// Example

let arr = ['make', 'me', 'code', 'better', 'odd'];


for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);

    if(i > 2){
        break;
    }
}