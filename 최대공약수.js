//192와 162의 최대공약수 :6
//192%162=30 => 162 30
//162%30 = 12 => 30 12
//30%12 = 6 => 12 6 
//12%6==0 =>최대공약수는 6이 됩니다. 
//함수 공부할 필요 완전 있음

function gcd(num1,num2){
    if(num1 % num2 == 0){
        return num2;
    }
    return gcd(num2, num1%num2); 
    
}

console.log('최대공약수: '+gcd(192,162));