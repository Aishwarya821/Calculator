let display = document.getElementById("display");
let expression = "";
function deleteCharacter(){
    var display=document.getElementById('display');
    display.value=display.value.slice(0,-1);
}
function appendNumber(number) {
    expression += number;
    display.value = expression;
}

function appendOperator(operator) {
    expression += operator;
    display.value = expression;
}

function calculateResult() {
    try {
        let result = eval(expression);
        display.value = result;
        expression = "";
    } catch (error) {
        display.value = "Error";
    }
}

function clearDisplay() {
    expression = "";
    display.value = "";
}


