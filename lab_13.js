//Find the frequency of each element in a given array

let arr = [5,1,2,3,1,2];
let freq = {};

for(let i=0; i<arr.length; i++){
    let num = arr[i];

    if(freq[num]){
        freq[num]++;
    }else{
        freq[num]=1;
    }
}

for(num in freq){
    console.log(num+ " appears " +freq[num]+ " times");
}