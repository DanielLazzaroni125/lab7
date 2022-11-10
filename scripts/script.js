const courseList = {
    code: "ACIT 1620" ,  name:  "Web Fundamental Technologies",
    code: "MATH 1320" ,  name:  "Technical Math for IT",
    code: "ACIT 1630" ,  name:  "Database Systems"
}

let input = ""
do{
    input = prompt("Enter a BCIT course code (4-digit number): ");
}
while(input.length != 4 || isNaN(Number(input)))



