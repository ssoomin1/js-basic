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
    const numbers=prompt('입력: ').split(' ');
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