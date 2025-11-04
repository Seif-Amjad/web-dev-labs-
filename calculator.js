const screen = document.getElementById("screen");
let errorShown = false;

function insert(value) {
  if (errorShown) {
    screen.value = "";
    errorShown = false;
  }
  screen.value += value;
}

function resetCalc() {
  screen.value = "";
  errorShown = false;
}

function changeSign() {
  if (errorShown) return;
  if (screen.value.startsWith("-")) {
    screen.value = screen.value.slice(1);
  } else if (screen.value !== "") {
    screen.value = "-" + screen.value;
  }
}

function solve() {
  try {
    const expression = screen.value.replace("÷", "/").replace("×", "*");
    const result = eval(expression);
    if (isNaN(result) || result === undefined) throw "Invalid";
    screen.value = result;
    errorShown = false;
  } catch {
    screen.value = "Error";
    errorShown = true;
  }
}
