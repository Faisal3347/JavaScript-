const mysym=Symbol("key1") ///this is only acces by square bracket []
const jsuser={
    name:"faisal",
    [mysym]:"mykey1",
    age:22,
    email:"faisal@gmail.com",
    location:"thane"
}

console.log(jsuser["name"]);
console.log(jsuser["email"]);
console.log(jsuser[mysym]); //here is use score bracket

jsuser.email="faisal123@gmail.com"
console.log(jsuser);
Object.freeze(jsuser)
jsuser.email="faisal736487@gmail.com"
console.log(jsuser);

jsuser.greeting=function(){
    console.log("hello js user");

}
jsuser.greetingtwo=function(){
    console.log(`hello js user i am ${this.name}`);
    
}
console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());
