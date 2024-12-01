// Objects

const user = {
    name: 'Ayush',
    age: 25,
};

user.name = 'Ayush Tripathi';
delete user.age;
console.log(user)


// delete is used when we want to delete a property from an object
// we cannot delete a variable using delete

const func = (function (a) {
    delete a;
    return a;
})(5);
// Output will be 5
console.log(func)

const property = "firstName"
const name = "Ayush"

const user1  = {
    [property] : name,
}

console.log(user1)

// Stringify and Parse

const user2 = {
    name : "Ayush",
    age : 25
}

const stringVar = JSON.stringify(user2);

console.log(stringVar);

const objVar = JSON.parse(stringVar);

console.log(objVar);

// Destructuring

let user3 = {
    newname : "Ayush",
    age : 25
};

// Rename
const { newname:myName } = user3
console.log(myName);


// Nested Destructuring
let user4= {
    newname : "Ayush",
    age : 25,
    fullName :{
        first: "Ayush",
        last: "Tripathi"
    }
};

const { fullName: {first}} = user4;
console.log(first)


// Spread Operator
function getItems(fruitList, favoriteFruit, ...args){
    return [...fruitList, ...args,favoriteFruit];
}

console.log(getItems(['banana','apple'],'mango','orange'));



// Object Referencing (Call By Reference) So both value will change

let c  = { greeting : "Hey"};
let d;
d = c;

c.greeting = "Hello";
console.log(d.greeting); // Hello


// Since both the object has different memory (They are stored separately) Hence the value will be False
// console.log({a:1} == {a:1});  False
// console.log({ a:1 } === { a:1 }); False



function changeAndReference(person){
    person.age = 25; // Value of age will be updated since it is passed by reference

    person = {
        name : "Ayush",
        age:50
    }; // New Object is created which is being returned. It will  not modify personObj1
    return person;
}

const personObj1 = {
    name:"Akash",
    age: 30
}

const personObj2 = changeAndReference(personObj1); //Pass by reference

console.log(personObj1); // name : Akash,  age : 25
console.log(personObj2); // name : Ayush, age : 50


// Deep Copy of Object 


let user5 = {
    newname : "Ayush",
    age : 25
};

//First Way

const objClone = JSON.parse(JSON.stringify(user5));
console.log(user4)
objClone.name = "Akash";
console.log(objClone)


//Second Way
const objClone2 =  {...user5}
console.log(user4)
objClone2.name = "Ashish";
console.log(objClone2)
