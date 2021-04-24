//ex31 => 시간복잡도 문제
//ex32 : 단어수 세기
{
    //const sentence = prompt('입력: ').split(' ');
    const sentence = '안녕하세요. 저는 미림여정에 다니는 신수민입니다.'.split(' ');
    console.log(sentence.length);
}

//ex33 : 거꾸로 출력하기
{
    //const numbers=prompt('입력: ').split(' ');
    const numbers='1 2 3 4 5'.split(' ');
    console.log(numbers.reverse().join(' '));
}
//ex34 : sort 구현하기
{
    //const numbers=prompt('입력: ').split(' ');
    const numbers='120 160 123 157'.split(' ');
    const heights=numbers.map((h)=>h);
    const sortNumbers=numbers.sort((a,b)=>a-b);
    const answerArr=[];
    for(let i=0;i<heights.length;i++){
        if(heights[i] === sortNumbers[i]){
            answerArr.push(true);
        }else{
            answerArr.push(false);
        }
    }

    const answer=answerArr.every((index)=>index===true)?'YES':'NO';
    console.log(answer);
}

//ex34_ver2
{
    const numbers='10 20 70 50';
    
}

//ex35
{
    function one(n){
        function two(){
            
        }
        return two;
    }
    
    const a = one(2);
    const b = one(3);
    const c = one(4);
    
    console.log(a(10));
    console.log(b(10));
    console.log(c(10));
}

//ex36
{
    //const number=Number(prompt('입력: '));
    const number=Number('3');
    const answer=[];
    for(let i=1;i<10;i++){
        answer.push(number*i);
    }
    console.log(answer.join(' '));
}

//ex37
{
}

//ex38

//ex39 오타수정하기 모든 q를 e로 바꾸기
// {
//     const input=prompt('입력: ').split('');
//     for(let i=0;i<input.length;i++){
//         input[i]==='q'?input[i]='e':input[i];
//     }
//     console.log(input.join(''));
// }

//ex40 놀이동산에 가자
{
    // const input1=prompt('제한 무게: ');
    // const input2=Number(prompt('함께한 친구들: '));
    // let weights=0;
    // let count=0;
    // for(let i=0;i<input2;i++){
    //     const weight=Number(prompt('무게: '));
    //     weights+=weight;
    //     if(weights<input1){
    //         count+=1
    //     }
    // }

    // console.log(count);
}

//ex41 소수 판별
{
    const num=prompt('입력: ');
    for(let i=2;i<=num;i++){
        const result=num%i;
        if (result === 0){
            console.log('NO');
        }
    }
    if(num===1){
        console.log('NO');
    }
    console.log('YES');
}