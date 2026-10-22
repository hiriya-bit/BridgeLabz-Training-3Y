/**{
    console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.log("Hello World");
console.warn("warning this");
console.error("errro");
console.clear();
}
var a = 30;
var b  = 70;
console.log(a+b)

b=90;
var b
console.log(a)
console.log(b)

{
    {
        var c= 50;
    }
    console.log(c)
}**/
//let
/**let p = 90;
{
    let p = 68
    console.log(p)
}
const q = 49;//it shows error
q = 499;//error 
console.log(q)//error */

//String and boolean 
/*let d = "hII"
let e = 'hII'
let f = 10
let k = 89;
let g = `hii ${d} $(st)+>`
console.log(d," ",e,f)
let h = true //1
let i = false //0

//big int 
let sa = 10n //bigint matlab bada number
let ss = 10e10 // 10 ki power 10
let sd = 23.56845; //only number hota double int  decimal ye sab kuch ni hota 
console.log(10/0)//infinity 
console.log(-10/0)//-infinity 

//undefine ands null
let aa;
let cc = null;
let dd = 39.7;
console.log(typeof dd)
console.log(typeof null)// object because this is the expection of javascript

//symbol -> 95 percent kahin milega hi ni  you can skip 
//important are bign,String,boolean,number, undefine and null 

//object
let ob = {
    name:"Riya",
    class:"abc",
    name:"shiv"
}
console.log(ob)//name shiv because of overwrite

//console.log(ob.ob.class)
console.log(Object.keys(ob))
console.log(Object.values(ob))**/

//12-october-2026
//Primitive store stack(pop-in) and non-primitive store heap 
// let a = 4;
// a={
//     name:"abcd"
// }
// let c = a;
// c.name="xyz"
// console.log(c["name"])

//agar js mein non-primitive hai then wo sab object hi hote hai even yahan array bhi object hi hota h 
//object is a name and keys return the value of object 
//bigint range(2^33 -1) 2 ki power 33 - 1

//typechange 
//if(false, 0, " "(empty string),undefine ,null )these all are return false 
//if([],{})empty array and string always return true 

//Array lka type kuch bhi rakh sakte hai yahan type array ka kuch ni hota
//like let s = ["abcde",43,4242.54,{name:"Riya"},[],10n] ye work karega aur iski length hogi 6

/**let d = {
    first_name:"khfyrb"
}
d.first_name
d["last_name"]="bnvbvhcn"**/

//these TWO TYPES YOU CAN ACCESS OBJECT 
//delete d.first_name; //this is the method to delete an object 

//data compare 
//do hote h ==(check only check data ) and ===(check data as well as type)
/**console.log(true==1);
console.log(true===1);
console.log(""==0);
console.log(""===0);
let sp = true
let sc = "HII"
console.log(sp==sc)
console.log(true=="HII")**/

//boolean+number output always in number) 
//example = console.log(true+5)output then outputr 6 
//console.log(false+9)

//boolean+String
// console.log(true+"HIII") //trueHIII
// console.log(true+null) //1
// console.log(undefined+true) //NaN means not a number
// console.log(typeof NaN)//it shows number then is the problem of js kisi ko bhi ni pta 
// console.log(Number.isNaN("HIII"))
// console.log(Number.isNaN(3))

//String+number
//+ two type se work karta hai add(jb nu. honge) or concate(jb string honge)
// console.log("7"+5+5)
// console.log("8"-8)// js ne string wale 8 ko number mein convert kar diyA that's why output 0
// console.log("HIII"-8)
// console.log("HIII"+true)//string mein add nhi hoga possibility hi nahi h ki wo string ko number mein change kar sake 
// console.log("hii"+undefined)
// console.log("HII"+null)
// console.log(("HIII"+null)-(true+4)+(null*undefined)+(null+23)+12.34) // bracket laga lo agar a+b+c+d maan lo toh kya karene ((a+b)+(c+d))
// console.log(0.2+0.1);//js mein kabhi no. direct add ni hote binary format mein add hote hai isliye output aayega 0.300000000004

// //Typechange 
// let s = 89;
// let sc = String(s)
// console.log(typeof sc)
// let sa = "45"
// let sn = Number(sa)
// let sn2 = parseInt(sn)
// console.log(Boolean(sc))

//Maths
// console.log(Math.random()*10000);
// console.log(Math.round(4.6))
// console.log(Math.floor(4.5))
// console.log(Math.ceil(4.999))
// console.log(Math.sqrt(25))
// console.log(Math.pow(5,3))
// console.log(Math.abs(-456))
// console.log("otp",Math.floor(Math.random()*10000)) // itgenrate otp
// console.log(Math.floor(345/2))
// console.log(Math.min(1,4,6,8,9,0)) //number ka min value aayega 
// console.log(Math.max(1,4,5,6,67,8,9)); // number ka max value aa jaayega 
// console.log(2**3) // used for power
// let sd = 0 || 6;
// let sd2 = 0 && 6;
// console.log(sd,sd2)

// let ds = sd>9? "Number":"not number"
// let isuser = true;
// let islogin = isuser?"login user":"not login"
// if(isuser){
//     console.log("user login")
// }
// else{
//     console.log("user not login")
// }
// console.log(islogin);
// console.log(ds);

// let a1 = "12355xyz"
// let a2 = "xyz12355"
// console.log(parseInt(a1));
// console.log(parseInt(a2));
// console.log(Number(""));
// console.log(Number(a2));
// console.log(Number.isFinite(59)); //59 is a finite number so it return true 
// console.log(Number.isNaN("wfjkugvvhh"));

// //6 digit otp generate 
// console.log("otp",Math.floor(Math.random()*1000000))
// //decimal ke baad bas 2 digit aaye 
// let nu = 0.1
// console.log(nu.toFixed(2))

// let as = 49;
// as = 48;
// const ob = {
//     name: "Riya"
// }
// ob.name = "abc"
// console.log(ob);
// console.log(Object.keys(ob));
// console.log(Object.values(ob));
// delete ob.name;

//Array
// let arr = [2,"syd",true,3.6,{name:"riya"}]
// for(let i = 0;i<arr.length;i++){
//     if(arr[i]==key){
//         console.log("");
//     }
//     elseif(true){

//     }
// console.log(arr[i])
// }
// let key = 89;
// let arr2 = [3,56,23,67,89,86]
// console.log(arr.length)
// console.log(arr)

// let s = 3;
// let s2= 4;
// let s3 = 6;
// if (s + s2 > s3 &&
//     s2 + s3 > s &&
//     s3 + s > s2) {
//     console.log("Valid Triangle");
// }
// else {
//     console.log("Invalid Triangle");
// }

// //16/october/2026
// abc()
// function abc() {
//     console.log("HII")

// }
// abc()

// function fact(){
//     let num = 12;

// for(let i = 1; i <= num; i++){
//     if(num % i == 0){
//         console.log(i);
//     }
// }
// }
// fact()

// //Q1
// function abc(){
//     //Input: nums = [12, 45, 7, 89, 23]
//     let arr = [12, 45, 7, 89, 23]
//     let max = arr[0];
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i]>max){
//             max = arr[i]
//         }
//     }
//     console.log(max)
// }
// abc()

// //Q2
// function abc() {
//     // Input: nums = [12, -5, 7, 2, 23]
//     let arr = [12, -5, 7, 2, 23];
//     let min = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }

//     console.log(min);
// }
// abc();

// //Q3 
// function abc() {
//     let arr = [10, 5, 10, 8, 7];

//     let largest = -Infinity;
//     let secondLargest = -Infinity;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             secondLargest = largest;
//             largest = arr[i];
//         } else if (arr[i] < largest && arr[i] > secondLargest) {
//             secondLargest = arr[i];
//         }
//     }

//     if (secondLargest === -Infinity) {
//         console.log(-1);
//     } else {
//         console.log(secondLargest);
//     }
// }

// abc();

// //Q4
// let nums = [1, 2, 3, 4, 5];

// let left = 0;
// let right = nums.length - 1;

// while (left < right) {
//     let temp = nums[left];
//     nums[left] = nums[right];
//     nums[right] = temp;

//     left++;
//     right--;
// }

// console.log(nums);

// // //Q5
// let nums = [1, 2, 2, 4, 7];

// let sorted = true;

// for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i] > nums[i + 1]) {
//         sorted = false;
//         break;
//     }
// }

// console.log(sorted);

//Q6
// let nums = [1, 1, 2, 2, 3];

// if (nums.length === 0) {
//     console.log(0);
// } else {
//     let k = 1;

//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] !== nums[k - 1]) {
//             nums[k] = nums[i];
//             k++;
//         }
//     }

//     console.log("k =", k);
//     console.log(nums.slice(0, k));
// }



// //Q7 
// function movezero(){
//     //Input: nums = [0, 1, 0, 3, 12]
//     let arr = [0, 1, 0, 3, 12]
//     let j = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i]!=0){
//             arr[j] = arr[i];
//             j++
//         }
//     }
//     for (let i = j; i < arr.length; i++){
//         arr[i] = 0
//     }
//     console.log(arr);
// }
// movezero()


// // //Q8
// // function search(){
// //     //Input: nums = [4, 9, 2, 7], target = 2
// //     let arr = [4, 9, 2, 7];
// //     let target = 2;
// //     let left = 0;
// //     let right = arr.length-1;
// //     while (left < right){
// //         if(arr[left]==right){
// //             if((arr[left]==target)){
// //                 console.log(left);
// //             }
// //             if(arr[right]==target){
// //                 console.log(right)
// //             }

// //             left++, right--;
// //         }
// //         console.log(arr);
// //     }
// // }
// // search()

// //Q9
// let nums = [1, 2, 3, 4, 6];

// let even = 0;
// let odd = 0;

// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 2 === 0) {
//         even++;
//     } else {
//         odd++;
//     }
// }

// console.log({ even: even, odd: odd });

// //Q10
// let nums = [1, 2, 3, 4, 5];

// let sum = 0;

// for (let i = 0; i < nums.length; i++) {
//     sum = sum + nums[i];
// }

// console.log(sum);


//Q11
// let average = (nums) => {
//     if (nums.length === 0) {
//         return null;
//     }

//     let sum = 0;

//     for (let i = 0; i < nums.length; i++) {
//         sum += nums[i];
//     }

//     return sum / nums.length;
// };

// console.log(average([10, 20, 30, 40]));
// console.log(average([]));
// console.log(average([-5, 10]));

// //Q12
// let countTarget = (nums, target) => {
//     let count = 0;

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === target) {
//             count++;
//         }
//     }

//     return count;
// };

// console.log(countTarget([1, 2, 2, 3, 2, 4], 2));
// console.log(countTarget([1, 3, 4], 2));
// console.log(countTarget([], 2));

// //Q13
// let findRange = (nums, target) => {
//     let first = -1;
//     let last = -1;

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === target) {
//             if (first === -1) {
//                 first = i;
//             }

//             last = i;
//         }
//     }

//     return [first, last];
// };

// console.log(findRange([1, 2, 2, 2, 3, 4], 2));
// console.log(findRange([1, 3, 4], 2));
// console.log(findRange([5, 5, 5], 5));

//Q14
// let merge = (a, b) => {
//     let i = 0;
//     let j = 0;
//     let result = [];

//     while (i < a.length && j < b.length) {
//         if (a[i] <= b[j]) {
//             result.push(a[i]);
//             i++;
//         } else {
//             result.push(b[j]);
//             j++;
//         }
//     }

//     while (i < a.length) {
//         result.push(a[i]);
//         i++;
//     }

//     while (j < b.length) {
//         result.push(b[j]);
//         j++;
//     }

//     return result;
// };

// console.log(merge([1, 3, 5], [2, 4, 6]));
// console.log(merge([], [1, 2, 3]));

// 21-10-26
//Way of sorting 
// let bubble = (a, b)=>{
//     console.log(a+b);
// }
// console.log(bubble(null,undefined));


// function sort(){
//     let arr =[3, 2, 5, 7, 9, 5];
//     //filter
//     let newArr = arr.filter((value)=> value>5)
//     console.log(newArr);
//     //some every
//     let iskey = arr.some((value)=> value>8)
//     let iskey2 = arr.every((value)=> value>7)
//     console.log(iskey);
//     arr.push(5, 7, 8, 9, 9, 0)
//     //push
//     //pop 
//     //delete
//     arr.pop()
//     //shift 
//     //unshift
//     arr.unshift(678)
//     arr.shift()

//     arr.sort((a,b)=>{
//         a-b //asc
//         b-a //dsc
//     })
// }

//Q15
// function missingNumber(nums) {
//     let n = nums.length;
//     let sum = (n * (n + 1)) / 2;
//     let actualSum = 0;

//     for (let num of nums) {
//         actualSum += num;
//     }

//     return sum - actualSum;
// }

// console.log(missingNumber([3, 0, 1])); // Output: 2
// console.log(missingNumber([1]));       // Output: 0
// console.log(missingNumber([0, 1]));    // Output: 2

//Q16
function greaterThanThreshold(nums, threshold) {
    let result = [];

    for (let num of nums) {
        if (num > threshold) {
            result.push(num);
        }
    }

    return result;
}

console.log(greaterThanThreshold([2, 8, 5, 10, 3], 5));
// Output: [8, 10]

console.log(greaterThanThreshold([1, 2, 3], 5));
// Output: []

console.log(greaterThanThreshold([6, 7, 8], 5));
// Output: [6, 7, 8]