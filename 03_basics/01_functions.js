

function sayMyName(){
    console.log("P");
    console.log("R");
    console.log("I");
    console.log("N");
    console.log("C");
    console.log("E");
}

//sayMyName();

// function addTwoNumbers(number1, number2){
//     console.log(number1+number2);
// }
// addTwoNumbers(3,5)


function addTwoNumbers(number1, number2){
    // let result = number1+number2;
    // return result;

    return number1+ number2;
}

const result = addTwoNumbers(3,5)

// console.log("Result : ", result);


function loginUserMessage(username="sam"){
    if(!username){
        console.log("Please Enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Prince"));

console.log(loginUserMessage());


function calculateCartPrice(...num1){
    return num1;
}

function calculateCartPrice1(val1, val2, ...num1){
    return num1;
}


// console.log(calculateCartPrice(2));
// console.log(calculateCartPrice(200, 400, 500,2000));
// console.log(calculateCartPrice1(200, 400, 500,2000));

const user={
    username: "Prince",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user);

handleObject({
    username : "Sam",
    price: 399
})

const myNewArray = [200,400,100,600];

function returnSecondValue(getArray){
    return getArray[1];
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,400,500,1000]))