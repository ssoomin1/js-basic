'use strict';
//1.반복문
function factorial_interactive(n){
    let result=1;
    for(let i=n;i>0;i--){
        result*=i; 
    }
    return result;
}
//2. 재귀함수 stack의 구조 like semi-stack
function factorial_recursive(n){
    if(n<=1){
        return 1;
    }
    return n*factorial_recursive(n-1);
}

console.log('반복문으로 구현: '+factorial_interactive(5));
console.log('재귀함수로 구현: '+factorial_recursive(5));