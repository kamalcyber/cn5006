function EmployeeInfo(name, salary) {
    console.log("Wellcome " + name + ". Your monthly Salary is " + salary);
    console.log("This is my first progame");
}

var EmpName = "John";
var EmpSalary = 50000;

EmployeeInfo(EmpName, EmpSalary);
const EmpSkills = (skills) => {
    console.log("Expert in " + skills);
};

EmpSkills("Java");

const student = require('./StudentInfo');
const Person = require('./Person');

console.log("Student Name: " + student.getName());
console.log(student.Location);
console.log(student.dob);
console.log("Grade is: " + student.Studentgrade(55));

const person1 = new Person("Jim", 23, "myemail@gmail.com");
console.log("Using Person Module: " + person1.getPersonInfo());
const os = require('os');
const util = require('util');

console.log("Temporary directory: " + os.tmpdir());
console.log("Hostname: " + os.hostname());
console.log("OS: " + os.platform() + ". Release: " + os.release());
console.log("Uptime: " + os.uptime() / 3600 + " hours");
console.log("UserInfo: " + util.inspect(os.userInfo()));
console.log("Total Memory: " + os.totalmem() / 1000000000 + " Giga byte");
console.log("Free Memory: " + os.freemem() / 1000000000 + " Giga byte");
console.log("CPU: " + util.inspect(os.cpus()));
console.log("Network: " + util.inspect(os.networkInterfaces()));
console.log("Program end");
