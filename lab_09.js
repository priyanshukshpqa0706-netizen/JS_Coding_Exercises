//WAP to print left triangle star pattern

let n = 4;

for (let i = 1; i <= n; i++){

    let row = "";

    for (let j = 4; j >= i; j--){

        row += "* ";
    }
    console.log(row);
}