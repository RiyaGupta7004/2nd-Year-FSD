let a=10;
let b="10";
console.log(a==b);
console.log(a === b);
console.log(a+5);
console.log(a>5 && a<20);

let marks=75;
if(marks>=90){
    console.log("Grade A");
}
else if(marks>=60){
    console.log("Grade B");

}
else{
    console.log("Grade C")
}
//for loop:print 1 to 5
for(let i=1;i<=5;i++){
    console.log(i);
}
//while loop:print even numbers up to 10
let num=0;
while(num<=10){
    console.log(num);
    num+=2;
}
function add(x,y){

}
const greet=(name="Guest")=> `Hello, ${name}!`;
console.log(greet());
console.log(greet("Aman"));
const numbers=[1,2,3,4,5];
const doubled = numbers.map(n=>n*2);
const evens=numbers.filter(n=>n%2 === 0);
const sum=numbers.reduce((total,n)=>total+n,0);
console.log(doubled);
console.log(evens);
console.log(sum);
//spread:combine arrays
const arr1=[1,2,3];
const arr2=[4,5,6];
const.combined=[..arr1,..arr2];
console.log(combined);
function sumAll(...nums){
    return nums.reduce((a+b
}