 
    let numIn = parseInt(prompt("Enter Number"))
     
    let result = numIn % 2
    
    let num1 = parseInt(prompt("Enter Number"))
    let num2 = parseInt(prompt("Enter Number"))
    let result = num1 % num2
     
    
    
    let numOfStudents = 344
    let maxCapacity = 42
     
    let fullBuses = Math.floor(numOfStudents/ maxCapacity)
    if ((numOfStudents % maxCapacity) != 0) {
    fullBuses++
    }
     
    console.log(fullBuses)