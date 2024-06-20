function parseJSON(b){
    
    const a = JSON.parse(b);
    return a;
}
const b = '{"name":"kajal","age":30,"isStudent":"true"}';
console.log(parseJSON(b));