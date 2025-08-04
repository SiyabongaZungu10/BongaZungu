//function
const greet = (name: string) : string =>{
    return `Hello, ${name} , Welcome to codeTribe bootcamp `
}

console.log(greet("Philani"));

//Basic Types

//Numbers
let age : number = 24;
let price : number = 245.00;

//String
let firstName : string = "Phila";
let greeting : string = `Hello ${firstName} `;

//String function
const show = (name: string) : string =>{
    return `${name} `
}

//console.log(show(greeting));

//boolean
let isLogged : boolean = true;
let isNotLogged : boolean = false;

//display boolean variable
const showBoolean = (logged: boolean) : boolean => {
    return logged
}

//console.log(showBoolean(isLogged));

//Arrays
let numbers : number[] = [5,4,1,6,7,8];

//Array function
const showArrayNumbers = (name: number[]) : number[]=>{
    return name
}

//console.log(showArrayNumbers(numbers));

let scores : Array<number> = [90,45,89,58,71];

//display  arrays variables
const showArrays = (name: Array<number>) : Array<number> =>{
    return name
}

//console.log(showArrays(scores));

//Tuples
//Arrays with fixed length
let user : [number, string] = [34, "Musa"];

//display tuple variable or (any)
const showUser = (name: [number, string]) : [number, string] =>{
    return name
}

//console.log(showUser(user));

//Basic objects
let person: {name:string, age:number} = { name:"Philani", age:24 }

//display object variable
//const showObjects = (objectName: {name:string, age:number} ) : {name:string, age:number} =>{
  //  return objectName
//}

//console.log("My name is " , person.name , ", and i am " , person.age , " years old.");

//student type
type Student = {name: string, score: number}

let studentTut: Student = {name: "Philani", score: 78}

//display using a function
function studentInfor(student: Student): void {
    console.log(student.name);
    console.log(student.score);
}

//studentInfor(studentTut);

//car type
type Car = { brand: string, year: number, isNew: boolean }
let car: Car = { brand:"Omoda", year:2024, isNew:false }

function myCar1(carModel: Car): string {
    return  `${carModel.brand} is of year ${carModel.year}`
}

//returning function
//console.log(myCar1(car));

function myCar(vehicle: Car): void {
    console.log("Car model");
    console.log("===========");
    console.log(vehicle.brand);
    console.log(vehicle.year);
    console.log(vehicle.isNew);
}

//void function
//myCar(car);

//if statement for a new car
function myModelCar(carModel: Car): string {
    if(carModel.isNew == true) {
        return `${carModel.brand} of year ${carModel.year} is new.`
    }
    else {
        return `${carModel.brand} of year ${carModel.year} is not new.`
    }
}

//console.log(myModelCar(car));

//type Employee

//let employeeName : [string, string] = ["Philani", "Vundla"]

//Type Definition and Object Creation 
//1
type Employee = { firstName: string, lastName: string, age: number, department: string, skills: string[], isActive: boolean }

//2
let employee: Employee = {firstName: "Philani", lastName: "Vundla", age: 24, department: "IT", skills: ["Front-End", "UI/UX", "OS", "MS"], isActive: true}

let employee1: Employee = {firstName: "Mncedisi", lastName: "Mthembu", age: 25, department: "IT", skills: ["Backend", "PHP", "JavaScript"], isActive: true}

//Function Implementation and Execution
//1
function logEmployee(employeeInfor: Employee) : void {

    console.log("--- Employee Details ---");
    console.log(`Name: ${employeeInfor.firstName} ${employeeInfor.lastName}`);
    console.log(`Age: ${employeeInfor.age}`);
    console.log(`Department: ${employeeInfor.department}`);
    console.log(`Skills: ${employeeInfor.skills}`);
    
    if(employee.isActive) {
        console.log("Active: Yes");
    }
    else {
        console.log("Active: No");
    }

    console.log("==========================");
    console.log();
}

//2
logEmployee(employee);
logEmployee(employee1);

