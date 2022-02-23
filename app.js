let userNumberInput = '';
let userNumberString = '';
let finalString ='';
let totalSum ;
let numbersCounter = 0;
let StringCounter = 0;

let add = function (a,b) {
    
    return a + b;
}

let subtract = function (a,b) {
  
    return a - b;
}

let multiply = function (a,b) {
    
    return a * b;
}

let divide = function (a,b) {
  
    return a / b;
}

let operate = function(operator,num1,num2) {
    if (operator == '+'){
        totalSum = Number(add(num1,num2));
        numsToCalculateArr.pop();
        numsToCalculateArr.pop();
        numsToCalculateArr.push(totalSum); 
        userOperators.shift()
        calculatorDisplay.textContent = totalSum;
    }
    if (operator == 'x'){
        
        totalSum = Number(multiply(num1,num2));
        numsToCalculateArr.pop();
        numsToCalculateArr.pop();
        numsToCalculateArr.push(totalSum);
        userOperators.shift()
        calculatorDisplay.textContent = totalSum;
    }

    if (operator == '÷'){
        if (num2 == "0") {
            userCalculationProcess.textContent = '';
            calculatorDisplay.style.fontsize = "20px";
            calculatorDisplay.textContent = "Division by Zero";
        } else {
            totalSum = Number(divide(num1,num2));
            numsToCalculateArr.pop();
            numsToCalculateArr.pop();
            numsToCalculateArr.push(totalSum);
            userOperators.shift()

            calculatorDisplay.textContent = totalSum;
        }
    }
          
    if (operator == '-'){
        totalSum = Number(subtract(num1,num2));
        numsToCalculateArr.pop();
        numsToCalculateArr.pop();
        numsToCalculateArr.push(totalSum);
        userOperators.shift()

        calculatorDisplay.textContent = totalSum;
    }
    
}

const userCalculationProcess = document.querySelector('.calculator-display-process');


// this function creates the number from the corresponding butttons the user pressed
let calculatorDisplay = document.querySelector('.calculator-display-userInput');

// this function add an event listener to every number button
const numbers = document.querySelector('.buttons_numbers').childNodes;
numbers.forEach((button) => { 
    button.addEventListener('click',() => {
        userCalculationProcess.textContent = '';
        userNumberString += button.innerText;
        calculatorDisplay.innerText = userNumberString;
        userNumberInput = Number(userNumberString);
        finalString += `${button.innerText}`;
        userCalculationProcess.textContent = `${finalString}`;



    });
});
let numsToCalculateArr = [];
let userOperators = [];
// this function saves the operator the user picked and also clears the screen to 
// prepare for the second number
let userOperatorInput = '';
const operators = document.querySelector('.buttons_operators').childNodes;
operators.forEach((button) => { 
    button.addEventListener('click',() => {
        
        userOperatorInput = '';
        userOperatorInput = (button.textContent);
        userOperators.push(userOperatorInput);
        userNumberString = '';
        finalString += ` ${userOperatorInput} `;
        numsToCalculateArr.push(Number(userNumberInput));

        userCalculationProcess.textContent = finalString;

        numbersCounter++;
        if (numbersCounter >= 2) {
            calculation();
        }
    });
});

const equalsSign = document.querySelector('.equals')

equalsSign.addEventListener('click', ()=> {
    numsToCalculateArr.push(Number(userNumberInput));
  
    if(numsToCalculateArr.length == 1 ) {
        calculatorDisplay.innerText = "Missing Numbers For Calculation";
    }
    if (numsToCalculateArr.length >= 2 && !endWithOperator()){
        console.log("in")
        calculation();
    }
    

});


function calculation() {
      operate(userOperators[0],numsToCalculateArr[0],numsToCalculateArr[1]);
}
 
let clearScreen = document.querySelector('.clear');
clearScreen.addEventListener('click', ()=> {
    calculatorDisplay.textContent = '';
    userCalculationProcess.textContent = '';
    userNumberString = '';
    totalSum = 0;
    finalString = '';
    numbersCounter = 0;
    userOperatorInput = '';         
    userNumberInput = 0;
    numsToCalculateArr = [];

})

let endWithOperator = function () {
    temp = finalString;
    if (temp.slice(-1) == "+" || temp.slice(-1) == '-' || temp.slice(-1) == 'x' || temp.slice(-1) == '÷'){
        return true;
    }
    return false;
}