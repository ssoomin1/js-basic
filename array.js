'use strict';
const fruits=['🍎','🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);

//Looping all over an array
//print all fruits
for(let i=0;i<fruits.length;i++){
    console.log(i+'번째: '+fruits[i]);
}

//for of
for(let fruit of fruits){
    console.log(fruit);
}

//forEach  value index array
fruits.forEach((fruit) => console.log(fruit));

//Addition,deletion,copy
//push : add an item to the end
fruits.push('🍒','🍑');
console.log(fruits);

//pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

//unshift : add an item to the beggening
fruits.unshift('🍇','🥭');
console.log(fruits);
//shift : remove an item from the benigging
fruits.shift();
fruits.shift();
console.log(fruits);

//shift, unshift are slower than pop,push
//splice : 지정된 인덱스 아이템 삭제하기
fruits.push('🍓','🍑','🍋');
console.log(fruits);

//startIndex, 몇개 지울것인지, 추가하고 싶은 문자열
//지우기 싫으면 0으로 하기
fruits.splice(1,1,'🍏','🍉');
console.log(fruits);

//concat
const fruits2=['🍐','🍇'];
const newFruit=fruits.concat(fruits2);
console.log(newFruit);

//searching
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.indexOf('🍍'));

//include
console.log(fruits.includes('🍉'));
console.log(fruits.includes('hi'));

//lastIndexOf
console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.lastIndexOf('🍎'));

fruits.reverse();
console.log(fruits);

const str = 'hi,hello,my,name,is';
const strArr = str.split(','); //string to Array
console.log(strArr);
console.log(strArr.join('/')); // Array to string