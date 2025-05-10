function displayInput(result) {
  document.querySelector(".display_input").innerHTML = result;
}

function displayClearAll() {
  document.querySelector(".display_input").innerHTML = "";
  document.querySelector(".display_output").innerHTML = "0";
}

function displayOutput(result) {
  document.querySelector(".display_output").innerHTML = result;
}

export { displayInput, displayClearAll, displayOutput };
