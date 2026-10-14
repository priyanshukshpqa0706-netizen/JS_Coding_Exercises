//WAP to check Year is Leap Year or not?

let isLeapYear = 2024;

if(isLeapYear%400==0 || (isLeapYear%4==0 && isLeapYear%100!=0)){
    console.log(isLeapYear +": is a Leap Year");
}else{
    console.log(isLeapYear+ ": is not a Leap Year");
}