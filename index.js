console.log("Hello World");

let decimalBtn = document.getElementById("calc-decimal");
let clearBtn = document.getElementById("calc-clear");
let backspaceBtn = document.getElementById("calc-backspace");

let displayValElement = document.getElementById("calc-display-val");

let calcNumBtns = document.getElementsByClassName("calc-btn-num"); // an array
let calcOperatorBtns = document.getElementsByClassName("calc-btn-operator");

let displayVal = "0";
let pendingVal;
let evalStringArray = [];

const updateDisplayVal = clickObj => {
  let btnText = clickObj.target.innerText;
  if (displayVal === "0") displayVal = "";
  displayVal += btnText;
  displayValElement.innerText = displayVal;
};
const performOperation = clickObj => {
  let operator = clickObj.target.innerText;
  switch (operator) {
    case "+":
      pendingVal = displayVal;
      displayVal = "0";
      displayValElement.innerText = displayVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push("+");
      break;
    case "-":
      pendingVal = displayVal;
      displayVal = "0";
      displayValElement.innerText = displayVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push("-");
      break;
    case "x":
      pendingVal = displayVal;
      displayVal = "0";
      displayValElement.innerText = displayVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push("*");
      break;
    case "÷":
      pendingVal = displayVal;
      displayVal = "0";
      displayValElement.innerText = displayVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push("/");
      break;
    case "=":
      evalStringArray.push(displayVal);
      let evaluation = eval(evalStringArray.join(" ")); // ['5','+','5'] ---> ['5 + 5']
      displayVal = evaluation.toString();
      console.log(`the answer is ${evaluation}`);
      displayValElement.innerText = displayVal;
      evalStringArray = [];

    default:
      break;
  }
};

for (let i = 0; i < calcNumBtns.length; i++) {
  calcNumBtns[i].addEventListener("click", updateDisplayVal, false);
}
for (let i = 0; i < calcOperatorBtns.length; i++) {
  calcOperatorBtns[i].addEventListener("click", performOperation, false);
}

clearBtn.onclick = () => {
  displayVal = "0";
  pendingVal = undefined;
  evalStringArray = [];
  displayValElement.innerHTML = displayVal;
};
backspaceBtn.onclick = () => {
  let lengthOfDisplayVal = displayVal.length;
  displayVal = displayVal.slice(0, lengthOfDisplayVal - 1);
  if (displayVal === "") displayVal = "0";
  displayValElement.innerText = displayVal;
};
decimalBtn.onclick = () => {
  if (!displayVal.includes(".")) displayVal += ".";
  displayValElement.innerText = displayVal;
};
