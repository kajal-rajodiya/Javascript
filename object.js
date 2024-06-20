let person = {
firstname: "kajal",
lastname : "rajodiya",
age : 24,
}
console.log(person); // { firstname: 'kajal', lastname: 'rajodiya', age: 24 }
console.log(person.firstname); //kajal

let person1 = new Object();
person1.firstname ='kajal';
person1.lastname = 'rajodiya';
person1.age=24;
console.log(person1); //{ firstname: 'kajal', lastname: 'rajodiya', age: 24 }
console.log(person1.firstname); //kajal

//use bracket notation
console.log(person1['firstname']); //kajal
console.log(person1['lastname']); //rajodiya
console.log(person['age']);//24

//nested type
let person2 = {
    Name:'kajal',
    age:24,
    address:{
        area:'parlikar layout',
        road:'akola',
        pin:444403,
    }
}
console.log(person2.address.pin); //444403
console.log(person2['address']['road']); //akola

//modify properies
person2.address.road='washim';
console.log(person2.address.road); //washim is modified

person2['address']['pin']='444405';
console.log(person2.address.pin); // 444405 is modified

//add new properties
person2.address.country='india';
person2.address.city='mangrulpir';
console.log(person2.address.country);//india is added
console.log(person2.address.city);//mangrulpir is added

//remove properties
delete person2.address.area;
console.log(person2); //area is delete form addresses 

//objects method

const myObj = { myname:'kajal',age:24};
const keys = Object.keys(myObj);//show keys in array format
console.log(keys); //  [ 'myname', 'age' ]
const values=Object.values(myObj);
console.log(values);//[ 'kajal', 24 ]
const entries = Object.entries(myObj);//show key and value in array into an array
console.log(entries);//[ [ 'myname', 'kajal' ], [ 'age', 24 ] ]
const targetObj = {myname:'kajal'};
const sourceObj ={age:24};
Object.assign(targetObj,sourceObj);
console.log(targetObj); //{ myname: 'kajal', age: 24 }
Object.freeze(myObj);
myObj.age=40;
console.log(myObj);//{ myname: 'kajal', age: 24 }

//custom method

const arr  ={
    make:"kajal",
    model:"rajodiya",
    year:2022,
    startEngine:function(){
        console.log("Engine Started");
    }
}
arr.startEngine(); //Engine Started
 
//Accensing object method

const student = {
    myname:'kajal',
    age:24,
    greet:function(){
        console.log(`hello, my name is ${this.myname} and i am ${this.age} year old`);
        console.log('hello my name is' + this.myname +' and i am '+this.age +' old');
    }
}
console.log(student.myname);//kajal
student.greet();//hello, my name is kajal and i am 24 year old