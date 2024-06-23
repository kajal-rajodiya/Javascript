function nestedObject(obj, path){
    const keys = path.split('.');
    let current = obj;
    for(const key of keys){
        if(current && typeof current === 'object' && key in current){
            current = current[key];
        }else{
            return  null;
        }
    }
    return current;
 }
const data ={
    "person":{
   "myname":"kajal",
    "lastname":"rajodiya",
    "Address":{
        "city":"pune",
        "pin":444403}
}
};
const path1="person.Address.city";
console.log(nestedObject(data,path1));
