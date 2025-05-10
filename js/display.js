export function displayInput(result){
  document.querySelector(".display_input").innerHTML = result;
}

export function displayClearAll(){
  document.querySelector(".display_input").innerHTML = "";
  document.querySelector(".display_output").innerHTML = "0";
}

export function displayOutput(result){
  document.querySelector(".display_output").innerHTML = result;
}