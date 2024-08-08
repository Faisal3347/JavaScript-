const myobject={
    js:"javascript",
    cpp:"c++",
    py:"python",
    swift:"swift for apple"
}

for (const key in myobject) {
    console.log(`${key} for shortcut ${myobject[key]}`);
    
}

const programming=["js","rb","py","java","cpp"]
for (const key in programming) {
    console.log(programming[key]);

    
}
for (const key of programming) {
    console.log(key);
    
}