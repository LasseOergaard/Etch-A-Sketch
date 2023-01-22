//Variables//
let currentColor = "divBlack"
let amountOfDivs = 9;

// ELEMENTS //
let applyButton = document.querySelector("#apply-button");
applyButton.addEventListener("click", applyRows);

let input = document.querySelector("#amount-of-rows");
let divContainer = document.querySelector(".div-container");

let allDivsInDivContainer;

let clearButton = document.querySelector(".clear-button")
clearButton.addEventListener("click", clear);

let colorButtons = document.querySelectorAll(".color");
colorButtons.forEach(button => button.addEventListener("click", changeColor));

//FUNCTIONS//

//clears page//
function clear() {
  allDivsInDivContainer.forEach(div => div.classList.remove("divGreen", "divRed", "divBlack", "divBlue", "DivNone"))
}

//runs to begin the site//
function beginSite() {
  let frCount = "1fr ".repeat(amountOfDivs)
  divContainer.style.cssText = `grid-template-columns: ${frCount};`

  for (let i = 0; i < amountOfDivs*amountOfDivs; i++) {
    let divElement = document.createElement("div");
    divElement.addEventListener("mouseover", function(e) {
      console.log(e)
      e.target.classList.remove("divGreen", "divRed", "divBlack", "divBlue", "DivNone")
      e.target.classList.add(currentColor)
    })
    divElement.setAttribute("id", "divElement")
    divContainer.appendChild(divElement);  
  }
  allDivsInDivContainer = document.querySelectorAll("#divElement")
}


//runs to update the amount of divs//
function applyRows() {
  amountOfDivs = input.value;
  if (amountOfDivs <= 0 || amountOfDivs > 100) {
    alert("Must be between 1 and 100.")
    return;
  }
  divContainer.innerHTML = "";
  
  amountOfFr = "1fr ".repeat(amountOfDivs)
  divContainer.style.cssText = `grid-template-columns: ${amountOfFr} ;`

  for (let i = 0; i < amountOfDivs**2; i++) {
    divElement = document.createElement("div");
    divElement.addEventListener("mouseover", function(e) {
      console.log(e)
      e.target.classList.remove("divGreen", "divRed", "divBlack", "divBlue", "DivNone")
      e.target.classList.add(currentColor)
    })
    divElement.setAttribute("id", "divElement")
    divContainer.appendChild(divElement);
  }
  allDivsInDivContainer = document.querySelectorAll("#divElement")
}

function changeColor() {
  if (event.target.classList.contains("color-red")) {
    currentColor = "divRed"
  } else if (event.target.classList.contains("color-green")) {
    currentColor = "divGreen"
  } else if (event.target.classList.contains("color-none")) {
    currentColor = "divNone"
  } else if (event.target.classList.contains("color-blue")) {
    currentColor = "divBlue"
  } else if (event.target.classList.contains("color-black")) {
    currentColor = "divBlack"
  } 
}

beginSite()
