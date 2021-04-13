// The while loop is an iterator that continues to run a snippet of code or function provided the condition is true.


// Example: We would create a function that returns the name of a country provided the condition in the while loop is true;


let picker =  function(num){
    let countries = ['Nigeria', 'USA', 'Carlifornia', 'Paris', 'Russia', 'Japan'];

    while(num < 5){
        console.log(countries[num]);
        num++
    }
}

picker(0);