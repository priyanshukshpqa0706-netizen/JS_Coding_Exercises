//WAP to calculate grade based on a numeric score. A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: below 60.

let grade = 85;

if(grade>=90 && grade<=100){
    console.log('A');

}else if(grade>=80 && grade<=89){
    console.log('B');

}else if(grade>=70 && grade<=79){
    console.log('C');

}else if(grade>=60 && grade<=69){
    console.log('D');

}else if(grade>=50 && grade<=60){
    console.log('F');

}else{
    console.log("Fail");
}



//Switch Statement Approach

switch(grade){
    
    case(grade>=90 && grade<=100):
    console.log('A');
    break;

    case(grade>=80 && grade<=89):
    console.log('B');
    break;

    case(grade>=70 && grade<=79):
    console.log('C');
    break;

    case(grade>=60 && grade<=69):
    console.log('D');
    break;

    case(grade>=50 && grade<=59):
    console.log('F');
    break;

    default:
    console.log('Fail call your parents');
}    
