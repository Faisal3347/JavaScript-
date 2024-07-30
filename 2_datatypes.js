// // // alert(3+2) we are using js not browser showing erroe
// let a=console.log(3+3);
// console.log(typeof(6));

// //primitive type
// // srting ,  number , boolean , null , undefined , symbol,bigint
// //dynamic language 
// const score=100
// const score2=10.4
// console.log(typeof score);
// console.log(typeof score2);
// // refrence type /non primitive
// array , objects , functions 
// const array=["faisal", "khan"]
// let objects={
//     age:22,
//     name:"faisal",
// }
// const myfuction=function(){
//     console.log("faisal khan");
// }

// console.log(typeof array)
// console.log(typeof objects)

// const arr2=[1,2,3]
// console.log(typeof arr2);

// console.log(typeof myfuction);


// stack(primitive)  , heap(non-primitive)

let f1="khanfaisalzafirulhasan"
let f2=f1

f2="khanfahad"
console.log(f1);
console.log(f2);


let obj1={
    user:"faisal",
    password:"123"
}
console.log(obj1);
let obj2=obj1

console.log(obj2)
obj2.user="fahad"
obj2.password="234"
console.log(obj1);
console.log(obj2);