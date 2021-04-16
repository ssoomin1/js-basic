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
    const number=Number(prompt('입력: '));
    const answer=[];
    for(let i=1;i<10;i++){
        answer.push(number*i);
    }
    console.log(answer.join(' '));
}