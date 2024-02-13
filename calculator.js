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

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "ERROR";
    }
}

 function sqrt(){
    display.value = eval(Math.sqrt(display.value));
 }
