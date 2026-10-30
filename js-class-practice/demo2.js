// 27-10-26

// function getpagination(page = 0, limit = 10){
//     if(page >! 0){
//         console.log("user is new");
//     }
//     console.log("page", page);
//     console.log("limit", limit)
// }
// getpagination();
// getpagination(2);
// getpagination(2,100);


// function price(a,b=a*10){
//     console.log(a,b)
// }
// price(2,59);


// function a(bs = 10){
//     console.log(bs);
// }
// a(0);
// a(null);
// a(undefined);
// a(200);


// function abc(a,b){
//     console.log(a,b)
//     console.log("HII");
// }
// function xyz(a,b, callback){
//     callback(a,b)
// }
// xyz(a, b, abc)


// function app(){
//     console.log("app file");
// }
// (function(){
//     app()
//     console.log("HII", name);
// })("shree");
// (function(){
//     app()
//     console.log("HII");
// })()



// function ab() {
//     let ob = [
//         { name: "abc", classes: "sc" },
//         { name: "abc", classes: "sc" },
//         { name: "abc", classes: "sc" },
//         { name: "abc", classes: "sc" }
//     ];

//     let a = ob.filter((value) => value.classes);

//     console.log(a);
// }

// ab();



// 28-10-26


// let a = [3,4];
// let b =[...a];
// let ob = {name:"riya"}

// let c = ob;
// c.name = "abc"
// console.log(ob.name)
// let d = {...ob}

// let a =[2,3,4,5,6]
// //push
// a.push(20,20,59,59);

// //pop
// a.pop();

//shift unshift
// a.unshift(23,439,50,50)
// a.shift()

// //filter
// let b = a.filter((value,index)=>value >5)
// let c = a.filter((value,index)=>{
//     if(value>5){
//         return true
//     }
//     console.log(value,index)
// })
// console.log(b)

//map => elements ko map karne ke liye (return new array or array  ein manipulate karne ke liye )
// let d = a.map((value)=>value*2)
// console.log(d)

// let arr = [2,4,5,2,6,7,8,9]
// //indexof
// let index = arr.indexOf(2);
// console.log(arr[index])//index kis positio par h bata dega 
// arr[index] = 78;
// let index2 = arr.lastIndexOf(2)//last mein 2 kb aa raha wo dega 
// console.log(arr[index2])//data

// // includes =true false
// let isdata = arr.include(2);
// console.log(isdata);
// //some every 
// let isdata2 = arr.some((value)=> value>56)
// console.log(isdata2);
// //every
// let isdata3 = arr.every((value)=> value>56)
// console.log(isdata3);
// arr.forEach((value,index)=>{
//     console.log(value,index,arr[index])
// })

let s = [2,4,6,7]
let s2 = [6,7,8,90]
let s3 = [...s,...s2];
let s4 = s.concat(s2);
console.log(s3,s4);

// let s5 = [];
// let  j = 0;
// while(j<s.length && j <s2.length){
// }

//join 
let res3 = s.join("&") //"2&4&6&7"
let n = 56789;
// let s5 = n.toString().split("").reverse().join("")

//slice
let s6 = s.slice(2,4) //[2,4,6,7, 6,9,6 9,0]
//[7,6,9,6,9,0]
let s8 = [3.[4.[5],[7,[8,[3,[9,[0]]]]]]]
let res4 = s8.flat(Infinity)
let ss = "riya"
//split()
let ssd = ss.split("")//["r","i","y","a"]
let str = "          riya      ";
//trim       
str = str.trimStart();//start mein trim kar dega 
str = str.trimEnd();// end mein trim kar dega
str = str.trim() //this function 
console.log(ssd.reverse());

//30-october-2026
function printname(name){
    let name 
    console.log(ssd.reverse());
}

let ob = {
    name:"Riya",
    classes:"abc",
    print:function(){
        console.log(this.name,this.classes);
    }
}
console.log(typeof(ob.print()));
