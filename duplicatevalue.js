let arr2 = [{name:'Akash'},{name:'Chandre'}];
let arr1 = arr2;

arr1.push({name:'kajal'});

console.log(arr2);
console.log(arr1);

arr2[1].name='kajal';
console.log(arr2);
console.log(arr1);

let arr = ['h', 'e'];
arr.name = 'John';

console.log(arr); // ["h", "e"]
console.log(arr.name); // "John"
console.log(arr['name']); // "John"