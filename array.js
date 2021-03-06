'use strict';
const fruits=['π','π'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);

//Looping all over an array
//print all fruits
for(let i=0;i<fruits.length;i++){
    console.log(i+'λ²μ§Έ: '+fruits[i]);
}

//for of
for(let fruit of fruits){
    console.log(fruit);
}

//forEach  value index array
fruits.forEach((fruit) => console.log(fruit));

//Addition,deletion,copy
//push : add an item to the end
fruits.push('π','π');
console.log(fruits);

//pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

//unshift : add an item to the beggening
fruits.unshift('π','π₯­');
console.log(fruits);
//shift : remove an item from the benigging
fruits.shift();
fruits.shift();
console.log(fruits);

//shift, unshift are slower than pop,push
//splice : μ§μ λ μΈλ±μ€ μμ΄ν μ­μ νκΈ°
fruits.push('π','π','π');
console.log(fruits);

//startIndex, λͺκ° μ§μΈκ²μΈμ§, μΆκ°νκ³  μΆμ λ¬Έμμ΄
//μ§μ°κΈ° μ«μΌλ©΄ 0μΌλ‘ νκΈ°
fruits.splice(1,1,'π','π');
console.log(fruits);

//concat
const fruits2=['π','π'];
const newFruit=fruits.concat(fruits2);
console.log(newFruit);

//searching
console.clear();
console.log(fruits);
console.log(fruits.indexOf('π'));
console.log(fruits.indexOf('π'));

//include
console.log(fruits.includes('π'));
console.log(fruits.includes('hi'));

//lastIndexOf
console.clear();
fruits.push('π');
console.log(fruits);
console.log(fruits.indexOf('π'));
console.log(fruits.lastIndexOf('π'));

fruits.reverse();
console.log(fruits);

const str = 'hi,hello,my,name,is';
const strArr = str.split(','); //string to Array
console.log(strArr);
console.log(strArr.join('/')); // Array to string