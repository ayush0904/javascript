// Mar, Filter, Reduce

const nums = [1,2,3,4];

//  num = currElement 
// i = index 
// arr = current array 
const newNums = nums.map((num,i,arr) =>{
    return num * 3 + i;
})

console.log(newNums);

const newArr = nums.filter((num,i,arr) => {
    return num > 2;
})

console.log(newArr);

// 0 is the initial value. If not given by default it takes as first element of array
// acc = current result
// curr = current element
const sum = nums.reduce((acc,curr,i,arr) => {
    return acc + curr;
},0);

console.log(sum);


// map vs for each

const arr = [2,5,3,4,7];

// It returns an array
// We can chain functions
const mapResult = arr.map((ar) => {
    return ar + 2
});

console.log(mapResult);

// It modifies the array
// We cannot chain
arr.forEach((ar) => {
    return ar + 2
})

console.log(arr);


let students = [
    {name : 'John', marks : 80, rollNumber : 31},
    {name : 'Ayush', marks : 90, rollNumber : 15},
    {name : 'Ayush1', marks : 30, rollNumber : 35},
    {name : 'Ayush2', marks : 30, rollNumber : 7},
];

let names = [];

for (let i = 0; i < students.length;i++){
    names.push(students[i].name.toUpperCase());
}

console.log(names);

const mapnames = students.map((stu,i,arr)=>{
    return stu.name.toUpperCase();
})

console.log(mapnames);

let studentsMarks60 = []

for (let i =0; i <students.length;i++){
    if (students[i].marks > 60){
        studentsMarks60.push(students[i].name)
    }
}

console.log(studentsMarks60);

const mapMarks = students.filter((stu,arr,i) => {
    return stu.marks > 60
}).map((stu,i,arr)=>{
    return stu.name
})

console.log(mapMarks);

// M > 60 and R > 15
const newAnswers = students.filter((stu,arr,i) =>{
    if (stu.marks > 60 && stu.rollNumber > 15){
        return stu;
    }
}).map((stu,i,arr) => {
    return stu.name;
})


console.log(newAnswers);

const sumA = students.reduce((acc,curr) => {
    return acc + curr.marks
},0)

console.log(sumA);


const result = students.map((stu,i,arr) =>{
    if (stu.marks < 60){
         stu.marks += 20;
         
    }
    return stu;
}).filter((stu,i,arr) => {
    return stu.marks > 60;
}).reduce((acc,curr) => {
    return acc + curr.marks
},0)

console.log(result);