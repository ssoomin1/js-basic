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

{
    const d={
        'height':100,
        'weight':78,
        'weight':84,
        'temperature':36,
        'eyesight':1
    };

    console.log(d['weight']);
}

//문제 9번
{
    const year='2019';
    const month='04';
    const day='28';
    const hour='11';
    const minute='34';
    const second='27';

    const result=year.concat('/',month,'/',day,' ',hour,':',minute,':',second);
    console.log(result);
}

//문제 10번
// const number = prompt('숫자를 입력하세요: ');
// for(let i=0;i<)

//문제 11번
let s=0;
for(let i=1;i<=100;i++){
    s+=i;
}

console.log(s);

//문제 12번
class Wizard {
    constructor(health, mana, armor) {
        this.health=health;
        this.mana=mana;
        this.armor=armor;
    }

    attack(){
        console.log('파이어볼');
    }
}


const x=new Wizard(545,210,10);
console.log(x.health,x.mana,x.armor);
x.attack();

//문제 13번
// {
//     const solar=['수성','금성','지구','화성','목성','토성','천왕성','해왕성'];
//     const num=prompt('몇번째 행성을 선택하실건가요?');
//     console.log(solar[num-1]);
// }

//문제 14번
// {
//     const num1=prompt('숫자 입력: ');
//     if(num1%3 === 0){
//         console.log('짝');
//     }else{
//         console.log(num1);
//     }
// }

//문제 15번
// {
//     const myName=prompt('이름 입력: ');
//     console.log('안녕하세요. 저는 '+myName+'입니다.');
//     console.log(`안녕하세요. 저는 ${myName}입니다.`);
// }

//문제16번
{
    const mySentence=prompt('문장 입력: ');
    const leng=mySentence.length; //3
    let set=[];
    for(let i=0;i<leng;i++){
        set[i]=mySentence[leng-1-i];
    }
    console.log(set.join(''));
    //거꾸로
    //set[0]=[3-1]=[2] 로
    //set[1]=[3-1-1]=[1] 꾸
    //set[2]=[3-2-1]=[0] 거
}