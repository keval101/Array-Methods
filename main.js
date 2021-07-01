const number = [1,2,3,4,5,6,7,8,9,10];


//FOR EACH

let sum = 0;

number.forEach( item => {
    sum += item;
});

// console.log(sum)

// ----------------------------------------------------

const letters = ['a','a','b','a','c','d','a','b'];

let count = {};

letters.forEach( item => {
    if(count[item]){
        count[item]++;
    }else{
        count[item] = 1;
    }
})

// console.log(count)

// ----------------------------------------------------
// ----------------------------------------------------


//MAP -> doesn't change in main array it gives new array

const price = [
    {
        name:'laptop',
        price: 5000,
        count:5
    },
    {
        name:'desktop',
        price: 2000,
        count:2
    },
    {
        name:'phon',
        price: 500,
        count:3
    }
]

//geting object in array
const detail = price.map( detail => ({
    name: detail.name,
    total : detail.price * detail.count
}) );
// console.log(detail)

const str = ['1','2','3','4'];

const numbers = str.map(Number);
// console.log(numbers);


// ----------------------------------------------------
// ----------------------------------------------------

//FILL ARRAY
const no = [1,2,3,4,5]
no.fill(0);
// console.log(no)

function numArray(n){
    return Array(n)
    .fill(0)
    .map((_, idx) => idx + 1);
}

// console.log(numArray(10))

// ----------------------------------------------------
// ----------------------------------------------------

//Short

const Num = [0,5,3,1,2,4];
const sorted = Num.sort((a,b) => b - a);
// console.log(sorted)

price.sort((a,b) => a.price - b.price);
// console.log(price);


// ----------------------------------------------------
// ----------------------------------------------------

//IndexOF & lastIndexOf
const name = ['Florin', 'Ivan', 'Liam', 'Jay', 'Ivan',];

// console.log(name.lastIndexOf('Ivan'));


// ----------------------------------------------------
// ----------------------------------------------------

const totalSum = number.reduce((total,num) => {
    return total + num;
},0);

// console.log(totalSum)

const totalPrice = price.reduce((total, item) => total + (item.price * item.count),0);
// console.log(totalPrice)

// ----------------------------------------------------
// ----------------------------------------------------


//Filter 
const temp = price.filter(item => item.price > 1000);
// console.log(temp)

const even = number.filter(item => item % 2 === 0);
// console.log(even)

const nums = [1,1,1,2,3,4,5,5,6,7,8,9,9,9];
const numb = nums.filter((value, index, arr) => {
    return arr.indexOf(value) === index;
});

// console.log(numb)

// ----------------------------------------------------
// ----------------------------------------------------

//splice

const numSplice = number.splice(1,2,22,33); // here 2 is number of deleted item
const numbSplice2 = number.splice (4,0,66,77);

// console.log(numSplice)
// console.log(number)
// console.log(numbSplice2)

// ----------------------------------------------------
// ----------------------------------------------------

//include

const includeName = name.includes('Florin');
// console.log(includeName)


// ----------------------------------------------------
// ----------------------------------------------------

//join

const joinName = name.join('--');
// console.log(joinName);


// ----------------------------------------------------
// ----------------------------------------------------

//unShift

const newNum = [1,2,3,4,5]
newNum.unshift(0)
// console.log(newNum)

// ----------------------------------------------------
// ----------------------------------------------------

//Array From
const strG = "12345";
const newNumber = Array.from(str);
// console.log(newNumber)


// ----------------------------------------------------
// ----------------------------------------------------

//Find Index
const newNumb = [1,2,3,4,5];

const res = newNumb.findIndex(findThree);
function findThree(value){
    return value === 3;
}

// console.log(res)

// ----------------------------------------------------
// ----------------------------------------------------

//Reverse

const reverseArr = [...number].reverse();
console.log(reverseArr)
console.log(number)
number.splice(1,4,2,3,4)
number.splice(4,1)
console.log(number)
