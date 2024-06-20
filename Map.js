const map = new Map();
// add elemets into the map then we have to used the "set" methods 
map.set('name','kajal')
map.set('age',30);
console.log(map); // Map(2) { 'name' => 'kajal', 'age' => 30 }

map.delete('age');
console.log(map); //Map(1) { 'name' => 'kajal' }

map.clear();
console.log(map); //Map(0) {}

// if getting value from key then we have to used get method
const map1 = new Map([['name','kajal'],['age',30]]);
console.log(map1); //Map(2) { 'name' => 'kajal', 'age' => 30 }
console.log(map1.get('name')); //kajal

//iterating map by using forEach loop
const mymap = new Map([
    ['name','kajal'],
    ['age',30]
]);
mymap.forEach((value,key) =>{ //if we have to give key first then we need to used value fiest then key
    console.log(`${key}:${value}`); //name:kajal
                                    //age:30
})

for(const[key,value] of mymap){
    console.log(`${key}:${value}`);
    //name:kajal
    //age:30
}

const myMap = new Map([
    ['name','kajal']
]);
const a = Array.from(myMap);
console.log(a); //[ [ 'name', 'kajal' ] ]

