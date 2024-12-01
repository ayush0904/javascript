// this keyword

/* 
Here it is referring to global object(Window Objecct)
this : It depends upon the context in which it is referring
*/

this.a  = 5;
console.log(this.a);

// this will still target the global object. Since the parent of the function is global object
function getParam(){
    console.log(this.a);
}
getParam();

// this will still target the global object in Arrow Function. 
// Since the parent of the function is global object
const getParamArrow = () => {
    console.log(this.a);
}

getParamArrow();


let user = {
    name : 'Ayush',
    age: 24,
    getDetails(){
        // It will target the Parent object i.e. user object
        console.log(this.name);
    }
}
user.getDetails();


let user2 = {
    name : 'Ayush',
    age: 24,
    childObj: {
        name : 'Akash',
        getDetails(){
            // It will target the Parent object i.e. childObj object
            console.log(this.name);
        }
    }
    
}
user2.childObj.getDetails();


//  Arrow function take reference from it's parent function. In this case there is no parent function
// Hence it will point to the window function
let user3 = {
    name : 'Ayush',
    age: 24,
    getDetails: () => {
        // Since it is arrow function. It will point to the window object. 
        console.log(this.name); // Empty
    }
    
}
user3.getDetails();


let user4 = {
    name : 'Ayush',
    age: 24,
    getDetails() {
        
        // Since it is arrow function. It will take value from it's parent function
        // In this case it will take value from getDetails function. 
        const nestedArrow = () => console.log(this.name); // Print Ayush
        nestedArrow();
    }
    
}
user4.getDetails();


// Inside a class this will point to the constructor variable
class classUser {
    constructor(n){
        this.name = n;
    }

    getName() {
        console.log(this.name);
    }
}

const newUser = new classUser("Ayush New");
newUser.getName();

// 

const user5 = {
    name : "Ayush",
    getName(){
        const name = "Ayush New";
        console.log(this.name); // Ayush will be O/P. Since this points to Parent Object
    }
}
user4.getDetails();


function user6(){
    return {
        name : "Ayush",
        ref: this,
    }
}

let newuser6 = user6();

console.log(newuser6.ref.name); // Output will be empty. Since user6 is pointing to window object which does not have any name


function user7(){
    return {
        name : "Ayush",
        ref(){ 
            // Now the function will point to the parent object So it will have name property
            return this;
        }
    }
}

let newuser7 = user7();

console.log(newuser7.ref().name); // Output will be Ayush


const user8 = {
    name : "Ayush",
    logMessage() {
        console.log(this.name);
    },
};

setTimeout(user8.logMessage,1000); // It will print nothing. Since logMessage is being called inside the setTimeout function
// and it is pointing to window object which does not have any name. Note it will point to user8, since setTimeout works in Promise


const user9 = {
    name : "Ayush",
    logMessage() {
        console.log(this.name);
    },
};

// Now we have avoided creating it as a callback by wrapping it inside a function
setTimeout(function() {
    user8.logMessage(); // Output Ayush
},1000) 


const user10 = {
    name : "Ayush",
    greet() {
        return `Hello, ${this.name}`;
    },

    farewell: () => {
        return `Hello, ${this.name}`;
    },

};

console.log(user10.greet()); // Output Hello Ayush
console.log(user10.farewell()); // Output Hello



var calc = {
    total: 0,
    add(a){
        this.total += a;
        return this;
    },
    multiply(a){
        this.total *= a;
        return this;
    },
    subtract(a){
        this.total -= a;
        return this;
    },
};

const result = calc.add(10).multiply(5).subtract(10);
console.log(result.total);
