//WAP to check the vowels and consonants count in the name "Priyanshu"

let letter = "Priyanshu";
let vowels = "aeiou";
let vowCount = 0;
let consoCount = 0;

for(let i=0; i<letter.length; i++){

    let ch = letter[i].toLowerCase();

    if(vowels.includes(ch)){
        vowCount++;
    
    }else if(ch>='a' && ch<='z'){
        consoCount++;
    }
}

console.log("Vowels: "+vowCount);
console.log("Consonants: "+consoCount);