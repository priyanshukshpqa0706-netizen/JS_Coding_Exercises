//Check whether triangle is Equilateral, Isosceles or a Scalene 

let side1 = 15;
let side2 = 16;
let side3 = 17;

if(side1===side2 && side2===side3){
    console.log("Equilateral Traingle");

}else if(side1===side2 || side2===side3 || side1===side3){
    console.log("Isosceles Triangle");

}else{
    console.log("Scalene Triangle");
}