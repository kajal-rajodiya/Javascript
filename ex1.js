let numbers=[3,5,1,8,2];

// sort the array in ascending orde
numbers.sort();
console.log(numbers);


// find the index of the element with value 5
console.log(numbers.indexOf(5));

// adding elements to array's end
numbers.push(4,7);
console.log(numbers);

// concatenate two arrays
let moreNumbers=[6,9];
let allNumbers=numbers.concat(moreNumbers);
console.log(allNumbers);

// check if the array includes a certain element
let hasFive=allNumbers.includes(5);
console.log(hasFive);


// find the first element that is satisfying a condition
let greaterThanFour = allNumbers.find(number => number > 4);
console.log(greaterThanFour);


