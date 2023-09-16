const display = document.querySelector('.display input');
const buttons = document.querySelectorAll('.number, .operator');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');
const delButton = document.getElementById('del');
const OnButton = document.getElementById('open');

let isCalculatorOn = false;
let currentInput= '';
let calculation=[];

buttons.forEach(button => {
    button.addEventListener('click', () => handleButton(button.textContent));
});

clearButton.addEventListener('click', clearDisplay);
equalsButton.addEventListener('click', evaluateExpression);
delButton.addEventListener('click', delnumber_oper);
OnButton.addEventListener('click', start);

function handleButton(value) {
    //check calculator is on then start adding the inputs
    if (isCalculatorOn) {
        if (value==='×'){
            value='*';
        }
        else if (value==='÷'){
            value='/';
        }
            calculation.push(value);
            display.value=calculation.join('');
            }

       }

    


function clearDisplay() {

    //clear the whole text
    display.value = '';
    calculation = [];
    
   
}

function delnumber_oper() {
    //delete the last elemnet added
    calculation.pop();
    display.value = calculation.join('');
}

function start() {
    isCalculatorOn = stat();  
}
function stat(){
     // Return true to indicate that the calculator is On
    return true;
}

function evaluateExpression(){
    try {
        //evalute the expression added
        const result = eval(calculation.join(''));
        display.value = result;
    } catch (error) {
        display.value = 'Error';}
    calculation = [];    
}
  

