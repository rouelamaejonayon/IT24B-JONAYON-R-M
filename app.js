//Data Types

let j = 10;
let k = 15;

let name = "hello";
let char = 'a';

//Arithmetic & Logical Statements

let sum = j+k;
console.log(sum);

let minus = j-k;
console.log(minus);

let multiply = j*k;
console.log(multiply);

let divide = j / k;
if (k != 0) {
    
} else{
    console.log("Error: Division by zero is not allowed.");
    return;
}
console.log(divide);

//Conditional Statements

let age = 14;
if (age >= 21) {
    console.log("sugar mommy");
} else {
    console.log("pedophile ka");
}

let halaka = 'B';

switch (halaka) {
  case 'A':
    console.log('dawbi?');
    break;
  case 'B':
    console.log('sure na jud?');
    break;
  case 'C':
    console.log('any last question?');
    break;
  case 'D':
    console.log('sweto oh');
    break;
  default:
    console.log('gwapa lage ka?');
}

//LOOPS

for (let n = 0; n < 5; n++) {
    console.log("This is For Loop "+n);
}

let v = 0;
while (v < 5) {
    console.log("THis is While Loop "+v);
    v++;
}

//Functional Programming

function showOddorEven(){
    if(j %2==0){
        let result = console.log("NUmber is an Odd");
    } else {
        let result = console.log("Number is an Even");
    }
} 
function showPrime(){
    if(j %2==1){
        let result = console.log("The Number is Prime");
    } else {
        let result = console.log("The Number is not Prime");
    }
} 
console.log(showOddorEven());
console.log(showPrime());