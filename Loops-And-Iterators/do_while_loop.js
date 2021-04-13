// The do while loop is an iterator which continues to go on provided the condition is true.

// This is the same concept of a while loop but the difference between a while loop and a do while loop is at the first instance, the while loop will only run if the condition is true but a do while loop will run first before checking if the condition is true.

// Example: We would define a function that returns the increment of a value until the while loop  becomes false.



let incrementor =  function(num){
    do{
        console.log(num);
        num++;
    }while(num <= 13);
}


incrementor(10);
