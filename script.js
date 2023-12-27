/*
about us project💫

 Name of the programmer:
1- Fateme Satouri

project name :
Fox calculator

Project description:
 In this project, we made a simple calculator using several buttons, inputs and various functions.

start date:
December 25

end of the project:
December 27

email:navayearamm@gmail.com
 */

// define add function
// This function takes the inputs from the user and adds them together
function add() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  document.getElementById("result").innerText = "Result: " + (num1 + num2);
}
// define add subtract
//This function takes the input value from the user and subtracts them from each other
function subtract() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  document.getElementById("result").innerText = "Result: " + (num1 - num2);
}
// define add multiply
//This function takes the value of inputs from the user and multiplies them together
function multiply() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  document.getElementById("result").innerText = "Result: " + num1 * num2;
}
// define add divide
//This function takes the value of inputs from the user and divides them together, and if you enter the second number as zero, it will give you an error due to mathematical rules.
function divide() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  if (num2 === 0) {
    document.getElementById("result").innerText =
      "Result: Undefined (Division by zero)";
  } else {
    document.getElementById("result").innerText = "Result: " + num1 / num2;
  }
}
// define add pow
// This function takes the input value from the user and puts a base number and a second number in the power part and calculates them.
function pow() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  document.getElementById("result").innerText =
    "Result: " + Math.pow(num1, num2);
}

// method 2
// The second method of making a calculator using promt

// function add(num1, num2) {
//   return num1 + num2;
// }

// function sub(num1, num2) {
//   return num1 * num2;
// }

// function taghsim(num1, num2) {
//   return num1 / num2;
// }

// function baghiMandeh(num1, num2) {
//   return num1 % num2;
// }

// function mines(num1, num2) {
//   return num1 - num2;
// }

// function tavan(num1, num2) {
//  return Math.pow(num1 , num2);
// }

// let adad1 = Number(prompt("Enter a number:"));
// let dialog = prompt(
//   'Enter operation: "+" or "-" or "/" or "%" or "*" or "pow"'
// );
// let adad2 = Number(prompt("Enter a number:"));

// let result;
// if (dialog === "+") {
//   result = add(adad1, adad2);
// }
// if (dialog === "-") {
//   result = mines(adad1, adad2);
// }
// if (dialog === "*") {
//   result = sub(adad1, adad2);
// }
// if (dialog === "/") {
//   result = taghsim(adad1, adad2);
// }
// if (dialog === "%") {
//   result = baghiMandeh(adad1, adad2);
// }
// if (dialog === "pow") {
//   result = tavan(adad1, adad2);
// }

// console.log("result is :" + result);
