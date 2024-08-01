function saymyname(){
    console.log("F");
    console.log("A");
    console.log("I");
    console.log("S");
    console.log("A");
    console.log("L");
}

// saymyname()

function addnumbers(number1,number2){
    console.log(number1+number2);
}
addnumbers(3,4)

function numberaddition(n1,n2) {
    return n1+n2
    
}

let result=numberaddition(4,7)
console.log(result);

function userlogin(usenrmame){
    if(usenrmame === undefined){
        console.log("please enter username");
        return 
    }else{
    return `${usenrmame} is logged in`
    }
}
//console.log(userlogin("faisal"));
console.log(userlogin()); //if we doesnot gives the value it write undefined not null


function cartprice(val1,val2,...num1) {
    return num1
    
}
console.log(cartprice(100,200,300,400));

const myarray=[100,200,300,400]
function returnsecondvalue(getarray) {
    return getarray[2]
}
console.log(returnsecondvalue(myarray));


const user={
    usenrmame:"faisal",
    price:999
}
function handleobject(anyobject) {
    console.log(`username name is ${anyobject.usenrmame} and price is ${anyobject.price}`);
    
}
handleobject(user)
