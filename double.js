// system -1
const numbers =[2,4,6,8,10];
const doubled =[];
for (const num of numbers){
    const double =num*2;
    doubled.push(double);
}
console.log(doubled);

// map use the call back function in array
const number =[12,13,14,15,16];
function doubleIt(nums){
    return nums*2;
}
const result = number.map(doubleIt);
console.log(result);