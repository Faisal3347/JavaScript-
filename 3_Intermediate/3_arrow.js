const user={
    username:"faisal",
    price:"999",
    welcomemsg: function(){
        console.log(`${this.username} welcome to the website`);
        console.log(this);
        
        
        
        
    }
    
}
user.welcomemsg()
user.username="fahad"
user.welcomemsg()
Object.freeze(user)
user.username="faisal"
user.welcomemsg()
console.log(this);
//browser ke ander window object rehta hai mostly

function  chai() {
   username="engineer"
    console.log(this.username);
    
}
chai()

const chai2=function () {
    let usenrmame="faisal"
    console.log(this.usenrmame);
    
}
chai2()
//output difference is because of defining let because it uses only the function score and above usernaname does not contain any let so this is global variable and this fxn also work as global 
const chai3= () => {
    let usenrmame="faisal"
    console.log(this.usenrmame);
    
}
chai3()

const chai4=() => {
    usenrmame="engineer2"
    console.log(this.usenrmame);
    
}
chai4()



//==============arrow fuction============


const addtwo=(num1,num2)=>{
    return num1+num2
}
console.log(addtwo(2,4));

//implicit arrow function
const addnumbers=(num1,num2)=>(num1+num2)
console.log(addnumbers(2,4));

const string=(num1,num2)=>({username:"faisal"})
console.log(string());


