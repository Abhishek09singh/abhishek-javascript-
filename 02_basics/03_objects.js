// Singleton
// Object.create

// Object literals 

const mySym = Symbol("key1")


const JsUser = {
    name: "Abhishek",
    "full name": "abhishek singh",
    [mySym]: "mykey1",
    age: 18,
    location: "gonda",
    email: "abhishek@google.com",
    isLoggedin: false,
    lastLoginDays: ["monday", "satarday"]

}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof ["mySym"]);

JsUser.email = "abhishek@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "abhishek@makemytrip"
// console.log(JsUser)


JsUser.greeting 