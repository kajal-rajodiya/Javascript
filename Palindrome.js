// function isPalindrome(str)
// {
//     const s = str.replace(/[^a-zA-Z]/g,"").toLowerCase(); //ABCBA => abcba
//     const rev = s.split('').reverse().join(''); //[a b c b a] => [a b c b a] => "abcba"
//     return s == rev; //abcba == abcba
// }
// // var str="abcba";
// var str= prompt("Enter a string to check if it's a palindrome:");
// console.log(isPalindrome(str));




function isPalindrome(str)
{
    const s = str.toString().replace(/[^a-zA-Z]/g,"").toLowerCase();
   
    let left=0;
    let right=s.length-1;
    while(left < right)
        {
            if(s[left] != s[right])
                {
                    return false;
                }
                
                left ++;
                right --;
        }

return true;
}
var str="akash";
console.log(isPalindrome(str));
