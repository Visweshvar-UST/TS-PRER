/**************************
 * foreach method
 ***************************/
const color = ['red','blue','green']

for(let i = 0; i < color.length; i++){
    console.log(color[i]);
}

// foreach return void

const numbers = [1,2,3,4,5]
let sum = 0;
numbers.forEach((num)=>{
    sum+=num;
})

console.log(sum);

function findSum(num: number): void {
    sum += num;
}

sum = 0
numbers.forEach(findSum);
console.log(sum);


/**************************
 * map method
 ***************************/
const digits = [1,2,3,4,5]
const doubleDigits = []
for(let i = 0; i < digits.length; i++){
    doubleDigits.push(digits[i]*2);
}
console.log(doubleDigits);

//map  return new type val

let doubled = digits.map((num)=>{return num*2});
console.log(doubled);

const cars = [
    { mpdel: 'asd', price: 'asdaf'},
    { mpdel: 'fdsg', price: '12ads'},
];

const price = cars.map((ele)=>{return ele.price})
console.log(price);


/**************************
 * filter method
 ***************************/
const students = [
    {name: 'viswa', major: 'computer science'},
    {name: 'axel', major: 'computer science'},
    {name: 'anu', major: 'science'},
    {name: 'PJ', major: 'computer science'},
]
// filter return boolean
let csMajor = students.filter((obj)=>obj.major === 'computer science')
console.log(csMajor);


/**************************
 * find method
 ***************************/
const students2 = [
    {name: 'viswa', age: 22, major: 'computer science'},
    {name: 'axel', age: 19, major: 'computer science'},
    {name: 'anu', age: 20, major: 'science'},
    {name: 'PJ', age: 21, major: 'computer science'},
]

// find
const studentOver20 = students2.find((obj)=>(obj.age > 20)?obj.name:undefined);
console.log(studentOver20);

/**************************
 * every method
 ***************************/
// every
const isEverystudentOver20 = students2.every((obj)=>obj.age > 20);
console.log(isEverystudentOver20);


/**************************
 * some method
 ***************************/

const areSomestudentOver20 = students2.some((obj)=>obj.age > 20);
console.log(areSomestudentOver20);
/**************************
 * reduce method
 ***************************/
const studentScore = [80,90,85,75,100]

const ScoreSum = studentScore.reduce((acc,num)=>acc+num,0);
console.log(ScoreSum);

const ScoreAverage = studentScore.reduce((acc,num)=>acc+num,0)/studentScore.length;
console.log(ScoreAverage);


/**************************
 * template litrals
 ***************************/
function printCurrentDate() : string {
    const date = new Date().getDate;    
    const month = new Date().getMonth;    
    const year = new Date().getFullYear; 
    return `Current date is : ${date}`;   
}
console.log(printCurrentDate());

console.log(`Current date is : ${new Date().getDate}/${new Date().getMonth}/${new Date().getFullYear}`);


/**************************
 * foreach method
 ***************************/

/**************************
 * foreach method
 ***************************/

/**************************
 * foreach method
 ***************************/

