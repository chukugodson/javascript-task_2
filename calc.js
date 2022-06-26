var select = window.prompt("Please select the operation you will like to complete from 1 to 4 and press OK :   1. Add(+)   2. Subtract(-)   3. Multiply(x)    4. Divide(/)");

if (select == 1){
    var num1 = window.prompt("Enter first number");
    var num2 = window.prompt("Enter second number");
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    document.write(num1, " " , "+" , " " , num2, " " , "=", " " , num1+num2)
}else if (select == 2){
    var num1 = window.prompt("Enter first number");
    var num2 = window.prompt("Enter second number");
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    document.write(num1, " " , "-" , " " , num2, " " , "=", " " , num1-num2)
}else if (select == 3){
    var num1 = window.prompt("Enter first number");
    var num2 = window.prompt("Enter second number");
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    document.write(num1, " " , "x" , " " , num2, " " , "=", " " , num1*num2)
}else if (select == 4){
    var num1 = window.prompt("Enter first number");
    var num2 = window.prompt("Enter second number");
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    document.write(num1, " " , "/" , " " , num2, " " , "=", " " , num1/num2)
}else {
    alert(" 'Invalid option'. Reload and choose from the options given.")
}

