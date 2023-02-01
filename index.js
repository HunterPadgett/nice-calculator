"use strict";

const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) =>
 button.addEventListener("click", function calculate() {
  const buttonValue = button.textContent;
  if (buttonValue === "=") {
   display.value = math.evaluate(display.value);
  } else if (buttonValue === "clear") {
   display.value = "";
  } else if (buttonValue === "delete") {
   display.value = display.value.split("").slice(0, -1).join("");
  } else {
   display.value += buttonValue;
  }

  // silly 69 420 easter egg
  if (display.value == 489) display.value = "niceee 🔥💯🔥💯";
 })
);
