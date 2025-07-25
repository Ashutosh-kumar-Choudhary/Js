//singleton(when we declare objects by literals , singleton donot form , but it formed if we declare object with the help of constructors)
// Object.create(constructor method)
// Object literals

const mySym = Symbol("key1");

const Jsuser = {
    name: "ashutosh",
    "full Name": "Ashutosh choudhary",
    [mySym]: "mykey1",  // Correct usage

    age: 18,
    Location: "jaipur",
    email: "ashu@google.com",
    isloggedin: false,
    LastloginDays: ["Monday", "saturday"]
};

console.log(Jsuser.email);          // "ashu@google.com"
console.log(Jsuser["email"]);       // "ashu@google.com"
console.log(Jsuser["full Name"]);   // "Ashutosh choudhary"
console.log(Jsuser[mySym]);         // "mykey1"\
Jsuser.email ="Ashutosh@chatgpt.com"
// Object.freeze(Jsuser)//cannot change the value of object
Jsuser.email="Ashu@gma.com"
console.log(Jsuser.email);


Jsuser.greeting =function(){

    console.log("Hello user");
    
}
console.log(Jsuser.greeting());
Jsuser.greeting2 =function(){

    console.log(`Hello Js user ${this.name}`);
    
}
console.log(Jsuser.greeting2());


