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
    const num=prompt('숫자 입력: ').split(' ');
    const num1=parseInt(num[0]);
    const num2=parseInt(num[1]);
    console.log(Math.floor(num1/num2)+" "+num1%num2);
}