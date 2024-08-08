for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);
    
    
}

for (let index = 1; index <= 10; index++) {
    
    if (index==5) {
        console.log(`${index} is detected`);
        break
    }
    console.log(`value of index is ${index}`);
    
}

for (let index = 1; index <= 10; index++) {
    
    if (index==5) {
        console.log(`${index} is detected`);
        continue
    }
    console.log(`value of index is ${index}`);
    
}


for (let i = 0,j=10,k=0; j>=i; i++,j--,k++) {
    
        console.log(`${j} is greater than ${i}`);
        console.log(k);
        
        
    
    
}