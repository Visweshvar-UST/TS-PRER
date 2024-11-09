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
    {name: 'anu', major: 'computer science'},
    {name: 'PJ', major: 'computer science'},
]
// filter

/**************************
 * foreach method
 ***************************/

/**************************
 * foreach method
 ***************************/

/**************************
 * foreach method
 ***************************/

/**************************
 * foreach method
 ***************************/

/**************************
 * foreach method
 ***************************/

