// singleton

//object literals


const mySym = Symbol("key1");

const JsUser = {
    name:"Prince",
    age : 20,
    [mySym] : "myKey1",
    location : "london",
    email : "Prince@Prince.com",
    isLoggedIn : false,
    lastLogInDays : ["Monday", "Saturday"]
}

console.log(JsUser["email"]);
console.log(JsUser[mySym]);

JsUser.email = "Prince@chatgpt.com";
// Object.freeze(JsUser);
JsUser.email = "Prince@microsoft.com";
console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User,${this.name} `);
}

JsUser.greeting();
console.log(JsUser.greeting);
console.log(JsUser.greetingTwo());