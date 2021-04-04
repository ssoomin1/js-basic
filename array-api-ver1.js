//array quiz를 나 혼자 스스로 풀어보기
// Q1. make a string out of an array
{
const fruits = ['apple', 'banana', 'orange'];
console.log(fruits.join(','));
}

// Q2. make an array out of a string
{
const fruits = '🍎, 🥝, 🍌, 🍒';
console.log(fruits.split(','));
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
const array = [1, 2, 3, 4, 5];
const reverse_array=array.reverse();
console.log(reverse_array);
}

// Q4. make new array without the first two elements
{
const array = [1, 2, 3, 4, 5];
array.splice(0,2);
console.log(array);
}

class Student {
constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
}
}
const students = [
new Student('A', 29, true, 45),
new Student('B', 28, false, 80),
new Student('C', 30, true, 90),
new Student('D', 40, false, 66),
new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
    for(let i=0;i<students.length;i++){
        if(students[i].score===90){
            console.log(students[i]);
        }
    }
}

// Q6. make an array of enrolled students
{
    const enrollArr = new Array();
    for(let i=0;i<students.length;i++){
        enrollArr.push(students[i].enrolled);
    }
    console.log(enrollArr);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const scoreArr = new Array();
    for(let i=0;i<students.length;i++){
        scoreArr.push(students[i].score);
    }
    console.log(scoreArr);
}

// Q8. check if there is a student with the score lower than 50 Umm.......
{   
    for(let i=0;i<students.length;i++){
        students.find(()=>{
            students[i].score<=50;
        })
    }
}

// Q9. compute students' average score
{
    let sum=0;
    let avg=0.0;

    for(let i=0;i<students.length;i++){
        sum+=students[i].score
    }
    console.log(sum);
    avg=sum/students.length;
    console.log(avg);

}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const scoreArr = new Array();
    for(let i=0;i<students.length;i++){
        scoreArr.push(students[i].score);
    }
    let newScoreArr=scoreArr.join(',');
    console.log(newScoreArr);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const scoreArr = new Array();
    for(let i=0;i<students.length;i++){
        scoreArr.push(students[i].score);
    }

    const sortArr=scoreArr.sort();
    console.log(sortArr.join(','));
}
