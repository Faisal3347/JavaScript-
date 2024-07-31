const newobj ={
    emai:"faisal@gmail.com",
    fullname:{
        usenrmame:{
            fname:"faisal",
            lname:"khan",
        },
        fathername:{
            fname:"zafirul",
            lname:"hasan kahn"

        }
    }
}

console.log(newobj.fullname.fathername);


const tinderuser={

}
tinderuser.id="1234"
tinderuser.name="fahad"
tinderuser.emai="fahad@gmail.com"
console.log(tinderuser);


const obj1={1:"a",2:"b"}
const obj2={3:"c", 4:"d"}
const obj4={4:"e",6:"f"}
// const obj3={...obj1,...obj2,...obj4}
obj3=Object.assign(obj1,obj2,obj4)
console.log(obj3);

console.log(tinderuser);
 console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));


const course={
    cname:"fiasal",
    price:"999",
    location:"remote",
}
const{cname}=course
console.log(cname);

console.log(course.cname);