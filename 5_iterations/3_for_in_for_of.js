const arr=[1,2,3,4,5,6]
for (const num of arr) {
    console.log(num);
    
}

const greetings="hello faisal"
for (const greet of greetings) {
    console.log(`each character is ${greet}`);
    
}

//maps: object containing key value pair
const map=new Map()
map.set('In',"INDIA")
map.set('US',"UNited State of america")
map.set('UK',"United KIngdom")
console.log(map);

for (const key of map) {
    console.log(key);
    
}
for (const [key,value] of map) {
    console.log(key,":- ",value);
    
}
