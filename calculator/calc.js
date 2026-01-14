/*
    document - document is an object, that represents the DOM
    querySelector - a function that allows you to select a single
                    DOM (page) element, using a CSS selector
*/
const op1 = document.querySelector("#op1");
const op2 = document.querySelector("#op2");
const result = document.querySelector("#result");
const button = document.querySelector("#calc");

/*
    Inside of each of these variables (op1, op2, ...) are several
    properties that allow you to read or write changes
*/

button.onclick = function() {
    //get the text box operands
    let num1 = op1.value;
    let num2 = op2.value;

    //convert strings to numbers (parseInt(), parseFloat(), Number())
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    //calculate, then round to two digits
    let multiplyResult = num1 * num2;
    multiplyResult = multiplyResult.toFixed(2);

    result.textContent = "Result: " + multiplyResult;
}