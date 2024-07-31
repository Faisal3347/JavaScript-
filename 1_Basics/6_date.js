let mydate=new Date
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(typeof mydate);

let createdate = new Date(2023,0,23)
console.log(createdate.toString());
console.log(createdate.toDateString());

let mytimestamp= Date.now()
console.log(mytimestamp);

let mydate2=new Date()
console.log(mydate2.getMonth()+1);