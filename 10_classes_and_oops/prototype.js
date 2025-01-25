let myName = "Prince     "
let myChannel = "Chai       "

// console.log(myName.trim().length); 
// console.log(myName.truelength)


let myHeros = ["thor", "Spiderman"];

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.prince= function(){
    console.log(`Prince is present in all objects`);
}

Array.prototype.heyPrince = function(){
    console.log(`Prince says Hello`);
}

// heroPower.prince();
myHeros.prince();
myHeros.heyPrince();
// heroPower.heyPrince();

//inheritance

const user = {
    name : "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime : true,
    __proto__: TeachingSupport
}
Teacher.__proto__ = user

//modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "ChaiAurCode      ";
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is: ${this.trim().length}`);
}
anotherUsername.trueLength();
"Prince".trueLength();
"iceTea".trueLength();