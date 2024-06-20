function ObjectMerge(obj1,obj2){
    // return{...obj1,...obj2};
    return Object.assign(obj1,obj2);
}
const obj1={
    myname:'kaja;',
    lastname:'rajodiya',
    age:24
}
const obj2={
    myname:'Akash',
    lastname:'chandre',
    age:27
}
console.log(ObjectMerge(obj1,obj2));