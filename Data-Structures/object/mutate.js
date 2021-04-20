// To can add data and also mutate a key-value pair in an object

// Example

let stacks = {
    mern: ['MongoDB','Express', 'React', 'Node Js'],
    lamp: ['linux', 'Apache', 'Mysql'],
    
}


console.log(stacks);

stacks.jam = ['Javascript', 'API', 'mockup'];

stacks.lamp.push('PHP');

console.log(stacks);