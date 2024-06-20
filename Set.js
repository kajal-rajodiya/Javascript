const myset = new Set();
const fruitArray = ['apple','banana','mango'];
console.log(fruitArray); //[ 'apple', 'banana', 'mango' ]
const fruitSet = new Set((fruitArray));
console.log(fruitSet); //Set(3) { 'apple', 'banana', 'mango' }
const mySet = new Set(['a','b','c']);
console.log(mySet); //Set(3) { 'a', 'b', 'c' }

//adding element and removing element
const set = new Set();
set.add('apple');
set.add('banana');
set.add('mango');
set.add('apple');

console.log(set); //Set(3) { 'apple', 'banana', 'mango' }

set.delete('apple');
console.log(set); //Set(2) { 'banana', 'mango' }

//cheacking element if is in a set
const myset1 = new Set(['apple','banana','mango']);
console.log(myset1.has('apple')); //true
console.log(myset1.has('cherry'));//false

//getting size of set 
console.log(myset1.size); //3

//iterating through set
myset1.forEach((a)=>{   // forEach
    console.log(a); //apple
                    //banana
                    //mango
})

for(let a of myset1){ // for of 
    console.log(a);
// apple
// banana
// mango

}

//converting set to array
const myset2 = new Set(['apple','banana','mango']);
const fruits = Array.from(myset2);
console.log(fruits); //[ 'apple', 'banana', 'mango' ]