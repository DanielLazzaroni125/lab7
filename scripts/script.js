const courseList = [
    {code: "ACIT 1620" ,  name:  "Web Fundamental Technologies"},
    {code: "ACIT 1515" ,  name:  "Scripting for IT"},
    {code: "ACIT 1630" ,  name:  "Database Systems"}
]

let input = ""
do{ 
    input = prompt("Enter a BCIT course code (4-digit number): ");
}
while(input.length != 4 || isNaN(Number(input)))


for (let course of courseList){
    if (course.code.includes(input)){
        console.log(`Yes I am taking the course: ${course.code} - ${course.name}`)
    } else{
        let newCode = {code: "ACIT " + input, name: null};
        courseList.push(newCode)
        console.log("Success")
    }
}

