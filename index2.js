//var -> function
//  let -> block 
//const -> block 
// function sayHello(){
//     for(let i=0;i<5;i++){
//         console.log(i);
//     }
//     //console.log(i); //i가 var인 경우에는 5인상태에서 for문을 빠져나왔기 때문에
//     //i가 사라지는 것이 아닌 5인 상태로 멈춘다. => let으로 해결 let일 경우 오류 발생
// }


// sayHello();
const person={
    name:'Soomin',
    //walk: function(){}, //method
    walk(){
        console.log(this); //current object
    },
    talk(){}
};

// person.talk();
// person.name='';

// const targetMember ='name';
// person[targetMember.value]='Sooa';