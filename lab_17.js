//WAP to remove duplicates charcters from the given string
let str = "Hello World";

let result = [...new Set(str)];
console.log(result.join(''));