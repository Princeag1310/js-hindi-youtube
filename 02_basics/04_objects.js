const tinderUser = new Object();

tinderUser.id = "123abc";
tinderUser.name = "Prince"
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Prince",
            lastname : "Agrawal"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {
    1:"a",
    2:"b"
}
const obj2 = {
    3:"a",
    4:"b"
}

// const obj3 = {obj1,obj2};

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2};
// console.log(obj3);


const users = [
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 1,
        email : "h@gmail.com"
    },{
        id : 1,
        email : "h@gmail.com"
    },
]

// console.log(users[1].email);
// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course ={
    coursename : "js in hindi",
    price : "999",
    courseInstructor: "Prince"
}
// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// const navbar = ({company}) => {

// }
// navbar(company = "Prince")

// {
//     "name": "Prince",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]