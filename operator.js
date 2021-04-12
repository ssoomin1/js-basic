//1. String 
console.log('my'+'cat');

//Logical
const value1=false;
const value2=4<2;
//or true를 만나면 연산을 멈추기 때문에 하게 된다면
// heavy한 코드보다는 light 한것을 먼저 놓고 마지막에 두는 것이 좋다.
console.log(`or:${value1 || value2 || check()}`);

function check(){
    for(let i=0;i<10;i++){
        //waste time
        console.log('🍇');
    }
    return true;
}

//Equality
const stringFive='5';
const numberFive=5;

//== : loose 내용물은 같으니까!
console.log(stringFive==numberFive);

//=== : strict 타입까지 비교하여 연산해준다.
console.log(stringFive === numberFive);

//object equality by reference
const soom1={name:'soomin'};
const soom2={name:'soomin'};
const soom3=soom1;

console.log(soom1==soom2);
console.log(soom1===soom2);
console.log(soom1===soom3);

//0 null undefined '' => false
console.log(0 == false);//true
console.log(0=== false); //false 0 number false boolean
console.log('' == false); //true
console.log('' === false); //false
console.log(null == undefined); //true 공백
console.log(null === undefined); //false

//if-else if-else
const toYear=2021;
if(toYear === 2021){
    console.log('present');
}else if(toYear===2022){
    console.log('future');
}else{
    console.log('past');
}

//
console.log(toYear===2021?'Yes':'No');

//switch-case
const browser='Chrome';
switch(browser){
    case 'IE':
        console.log('Hi');
        break;
    case 'Chrome': case 'Firefox':
        console.log('Hello');
        break;
    default:
        console.log('Bye');
        break;
}

//while
let i=3;
while(i>0){
    console.log(`while : ${i}`);
    i--;
}

//dowhile
do{
    console.log(`while: ${i}`);
    i--;
}while(i>0);

for(let i=0;i<=10;i++){
    if(i%2!==0){
        continue;
    }
    console.log(i);
}

for(let i=0;i<11;i++){
    if(i>8){
        break;
    }
    console.log(i);
}