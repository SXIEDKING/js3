let number = promopt("Enter Number:", "")

if (number % 2 == 0){
    alert("Even Number")
}else{
    alert("Odd Number")
}    

let number1 = prompt("Enter number:", "")
let number2 = prompt("Enter number:", "")

if (number1 / number2 == 0){
    alert("True")
}else{
    alert("False")
}

let students = 344
let buses = 42
let answer = Math.floor (students / buses)
alert("The number of school buses needed" + answer)