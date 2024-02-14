// get input set as variable
var display = document.getElementById('display');

// Put input into textbox
function textbox(input){
    display.value += input;
}

// Clear display value
function clearFunc(){
    display.value = "";
}

// simply evals any function
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "ERROR";
    }
}
// SQRT function, uses math library to find sqrt then evals.
 function sqrt(){
    display.value = eval(Math.sqrt(display.value));
 }
// Backspace by slicing last character
function backspace(){
    display.value = display.value.slice(0, -1);
}
// Trigonometric functions
function trigonometry(input){
    // Switch statement for each type, math library used to find answer
    switch(input){
        case "sin":
            display.value = Math.sin(display.value);
            break;
        case "tan":
            display.value = Math.tan(display.value);
            break;
        case "cos":
            display.value = Math.cos(display.value);
            break;
        default:
            display.value = "ERROR";
    }
}
// Function for log and natural logarith
function logarith(input){
    // If statement for base 10 and mormal logarithms
    if (input == "log"){
        display.value = Math.log10(display.value);
    }else{
        display.value = Math.log(display.value);
    }
}
