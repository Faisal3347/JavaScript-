if (2===2) {
    console.log("faisal khan");
    
}

const month=3
switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("febuary");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    case 5:
        console.log("may");
        break;
        
    case 6:
        console.log("june");
        break;
    case 7:
        console.log("july");
        break;
    case 8:
        console.log("august");
        break;

    case 9:
        console.log("september");
        break;
    case 10:
        console.log("october");
        break;
    case 11:
        console.log("november");
        break;

    case 12:
        console.log("december");
        break;

    default:
        console.log("by default no match");
        
        break;
}


//falsy value:- 
//false, 0 ,-0 , BigInt,"",null,undefined,NaN

//truthy value:-
//"0",'faisal'," ",[],function , {}

const useremail=["2",3]

if (useremail.length==0) {
    console.log("array is empty");
    
}else{
    console.log("array is not empty");
    
}

const obj={}
if(Object.keys(obj).length==0){
    console.log("object is empy");
    
    
}

let val1;
val1=5 ?? 10
let val2=null ?? 10
console.log(val2);

console.log(val1);
