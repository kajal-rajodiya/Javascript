function RotateArray(str,k)
{
    k = k % str.length;
    const input = str.splice(-k); //[4,5]
    str.unshift(...input); //spread operator will remove the array and only give value
     //[4,5]  =>  4,5
     return str;

}
let str = [1,2,3,4,5];
let k = 2;
console.log(RotateArray(RotateArray(str,k)));
