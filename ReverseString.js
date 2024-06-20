//reverse string
 
function reverseString(sentence)
{
    let word = sentence.split(',').reverse().join();
    console.log(word);
    return word;

}
var sentence = 'hello,world';
console.log(reverseString(sentence));