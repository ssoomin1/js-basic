//ex16
{
    //const n=prompt('문장 입력: ');
    const n='거꾸로';
    const reverseString=n.split('').reverse().join('');
    console.log(reverseString);
}

//ex17
{
    //const height=prompt('키를 입력하세요: ');
    const height=150;
    if(height >= 150){
        console.log('YES');
    }else{
        console.log('NO');
    }
}

//ex18
{
    //Split a string into substrings using the specified separator and return them as an array.
    //const s=prompt('점수를 입력하세요: ');
    const s='20 30 40';
    const scores=s.split(' ');
    let sum=0; let avg=0.0;
    for(let i=0;i<scores.length;i++){
        sum+=Number(scores[i]);
    }
    avg=sum/scores.length;
    console.log(avg);
}

//ex19
{
    //const num=prompt('숫자 a와 b 입력: ').split(' ');
    const num='2 3'.split(' ');
    // const a=Number(num[0]);
    // const b=Number(num[1]);
    console.log(Math.pow(parseInt(num[0],10),parseInt(num[1],10)));
}

//ex20
{
    //const num=prompt('숫자 입력: ').split(' ');
    const num='5 6'.split(' ');
    const num1=parseInt(num[0]);
    const num2=parseInt(num[1]);
    console.log(Math.floor(num1/num2)+" "+num1%num2);
}

//ex24 : 이름을 입력하면 대문자로 바꿔주기
{
    //const name=prompt('이름 입력: ');
    const name='SooMin';
    console.log(name.toUpperCase());
}

//ex25 : 원의 넓이 구하기
{
    function circle(r1){
        return r1*r1*3.14;
    }

    //const r2=prompt('반지름 입력: ');
    const r2=3;
    console.log(circle(r2));
}

//ex26
{
    //이러한 구조를 뭐라고 부릅니까..?
    const Planet={
        '수성':'Mercury',
        '금성':'Venus',
        '지구':'Earth',
        '화성':'Mars',
        '목성' : 'Jupiter',
        '토성' : 'Saturn',
        '천왕성' : 'Uranus',
        '해왕성':'Neptune'
    };
    
    //const name=prompt('행성이름입력: ');
    const name='천왕성';
    console.log(Planet[name]);
}

//ex27
{
    const names=prompt('학생 이름 입력: ').split(' ');
    const scores=prompt('차례대로 점수 입력: ').split(' ');
    const student={};
    for(let i=0;i<names.length;i++){
        student[names[i]]=parseInt(scores[i],10);
    }

    console.log(student);
    
}

//ex28
{

}

//ex29
{

}

//ex30
{
    
}