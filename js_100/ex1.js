{
console.log('#1');
const nums=[100,200,300,400,500];
nums.pop();
nums.pop();
console.log(nums);
}

{
console.log('#2');
const arr1=[200,100,300];
arr1.splice(2,0,10000);
console.log(arr1);
}

{
console.log('#3');
const arr2=[100,200,300];
console.log(typeof(arr2)); //number가 아니라 object 타입
}

{
    //이런 함정이!!
    console.log('#5');
    let a=10;
    const b=2;

    for(let i=1;i<5;i+=2){
        a+=i;  //i=1,i=3 11+3=14
    }

    console.log(a+b); //14+2=16
}




