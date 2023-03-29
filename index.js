let equal_pressed = "0";
// Button Input Button
let button_input = document.querySelectorAll(".input-button");

// input, ac, del, equal
let input = document.getElementById("input");
let clear = document.getElementById("clear");
let eraser = document.getElementById("eraser");
let equal = document.getElementById("equal");

window.onload = () => {
  input.value = "";
};

// input button foreach
button_input.forEach((button_class) => {
  button_class.addEventListener("click", () => {
    if (equal_pressed == 1) {
      input.value = "";
      equal_pressed = 0;
    }

    // display value of each button
    input.value += button_class.value;
  });
});

// equal
equal.addEventListener("click", () => {
  equal_pressed = "1";

  let inp_val = input.value;
  try {
    // user input
    let solution = eval(inp_val);
    // true fot natural number
    // for decimal
    if (Number.isInteger(solution)) {
      input.value = solution;
    } else {
      input.value = solution.toFixed(2);
    }
  } catch (err) {
    // invalid input
    alert("Invalid Input");
  }
});

// eraser
eraser.addEventListener("click", () => {
  input.value = input.value.substr(0, input.value.length - 1);
});

clear.addEventListener("click", () => {
  input.value = "";
});
