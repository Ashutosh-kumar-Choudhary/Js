//Primitive
// 7 types : String , Number, Boolean ,null , Undefined,SymbolBigInt\

// Reference(Non Primitive)
// Array , Objects, Functions 
const heroes = ["shaktiman", "Nagraj", "doga"];

let myobj = {
    name: "Ashutosh",
    age: 22
};

const myfunction = function() {
    console.log("Hello world");
};

console.log(typeof heroes); 
// https://262.ecma-international.org/5.1/#sec-11.4.3


//****************************************************** *//
// stack (Primitive) , heap(Non -Primitive)
let myinstaname = "Ashuhumaii"
 let anothername = myinstaname
 anothername ="Chai sutta bar"
 console.log(myinstaname);
 console.log(anothername);
  let user ={
    email :"user@google.com",
    upi :"user@ibl"
  }
  
console.log(user.email);  
let userone = user 
   userone.email= "someone@gmail.com"

console.log(user.email); 
console.log(userone.email); 
