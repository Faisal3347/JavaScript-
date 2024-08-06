let a=10
const b=12
if(true){
    let a=14
    console.log("Inner:",a);
}
console.log(a);
function one() {
    const name="faisal"
    function two(params) {
        const website="you tube"
        console.log(name);
    }
    // console.log(website);
    two()
    
}
one()
//variables are very powerfull they store jason value , functions values
console.log(addone(5));

function addone(num) {
    return num+1
}

const addtwo=function(num){
    return num+2
}
console.log(addtwo(4));

