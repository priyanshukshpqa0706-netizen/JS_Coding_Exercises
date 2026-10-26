// WAP to check whether given String is a Palndrome or not

let str = "racecar";
let isPalindrome = str.split('').reverse().join('');

let result = str === isPalindrome;

if(result){
    console.log(str+ " is a Palindrome");
}else{
    console.log(str+ " is not Palindrome");
}