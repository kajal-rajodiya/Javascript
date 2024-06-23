function MergeObject(person,person1)
{
    //const person2 =Object.assign(person,person1);
    // return person2;
    return {...person,...person1};
}
const person ={
    "myname":"john",
    "age":25
}
const person1 ={
    "myname":"john",
    "isStudent":true,
    "age":30
}
console.log(MergeObject(person,person1));