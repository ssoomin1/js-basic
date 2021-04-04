//재귀함수 ex1
'use strict';

function ref_func(i){
    if(i==5){
        return ;
    }

    console.log(i+'번째 재귀함수에서'+(i+1)+'번째 재귀함수를 호출합니다.');
    ref_func(i+1);
    console.log(i+'번째 재귀함수를 종료합니다.');
}

ref_func(1);