
// Complexity = Big O(n)
function sumOfAll(n){
    let total=0;
    for(let i=0;i<=n;i++){
        total=total+i;
    }
    return total;
}


// Complexity = Big O(1)
function sumAll(n){
    return n*(n+1)/2;
}

let time1=performance.now();
console.log("From Sum Of All Function :: ",sumOfAll(100000000));
let time2=performance.now();

console.log(`Your Time (function 1) :: ${(time2-time1)/1000}`);


let time3=performance.now();
console.log("From Sum All Function :: ",sumAll(100000000));
let time4=performance.now();
console.log(`Your Time (function 2) :: ${(time4-time3)/1000}`);


