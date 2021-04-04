let name = 'Mosh'; //String 
let age=19; //Number 
let isApproved= true; //Boolean
let myName=undefined; //undefined
let selectedColor=null ; //사용자가 이 변수를 설정하면 재할당 

let person={
    name:'Soomin',
    age:19
}; //object key value

//Dot notation
person.name="John";
//Bracket Notation
let selection ='name';
person[selection]='Mary';

console.log(name);
console.log(person.name);

//예약어쓰지않기
//should be meaningful do not give like a,b,x,etc
// cannot start with a number (1name)
//cannot contain a space or hyphen(-)
//Are case-sensitive
//camelCase
let firstName = 'Mosh', lastName='Hamedani';
const interestRate=0.3;
console.log(interestRate);

//변수는 let, 상수는 const
//undefined는 변수 타입이자 value가 될 수 있다.
//js에서 array는 크기도 자유롭고 (동적이고) 타입도 달라도 된다.(차이점)
let selectedColors =['red','blue'];
selectedColors[2]=1;
console.log(selectedColors.length);

//===functions name은 파라미터, John은 얼규먼트
//performing a task
function greet(name, lastName){
    console.log('Hello '+name+' '+lastName);
}

//Calculating a value
function square(number){
    return number*number;
}

// greet('John','Smith');
// greet('Soomin','Shin');

console.log(square(2));
