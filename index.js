// IDs
let fontSizeContainer = document.getElementById("font-size");
let fontSizeInputElement = document.getElementById("font-size");
let fontStyleElement = document.getElementById("font-style");
let fontAlignmentElement = document.getElementById("font-alignment");
let fontColorSlashElement = document.getElementById("font-color-slash");
let colorInputElement = document.getElementById("color");
let textareaElement = document.getElementById("textarea");

// Classes
let wrapperElement = document.querySelector(".wrapper");
let containerMainElement = document.querySelector(".containermain");
let boldElements = document.querySelectorAll(".bold");
let italicElements = document.querySelectorAll(".italic");
let underlineElements = document.querySelectorAll(".underline");
let leftElements = document.querySelectorAll(".left");
let middleElements = document.querySelectorAll(".middle");
let rightElements = document.querySelectorAll(".right");
let aAElements = document.querySelectorAll(".aA");
let slashTElements = document.querySelectorAll(".slashT");
let colorElements = document.querySelectorAll(".color");

// Add event listener to each bold button
boldElements.forEach(function (boldButton) {
  boldButton.addEventListener("click", function () {
    // Check the current font weight directly from the style attribute
    let currentWeight = textareaElement.style.fontWeight;
    textareaElement.style.fontWeight =
      currentWeight === "bold" ? "normal" : "bold";
  });
});
// Add event listener to each italic button
italicElements.forEach(function (italicButton) {
  italicButton.addEventListener("click", function () {
    textareaElement.style.fontStyle =
      textareaElement.style.fontStyle === "italic" ? "normal" : "italic";
  });
});

// Add event listener to each underline button
underlineElements.forEach(function (underlineButton) {
  underlineButton.addEventListener("click", function () {
    textareaElement.style.textDecoration =
      textareaElement.style.textDecoration === "underline"
        ? "none"
        : "underline";
  });
});

// Add event listener to each right align button
rightElements.forEach(function (rightButton) {
  rightButton.addEventListener("click", function () {
    textareaElement.style.textAlign = "right";
  });
});

// Add event listener to each left align button
leftElements.forEach(function (leftButton) {
  leftButton.addEventListener("click", function () {
    textareaElement.style.textAlign = "left";
  });
});

// Add event listener to each center align button
middleElements.forEach(function (middleButton) {
  middleButton.addEventListener("click", function () {
    textareaElement.style.textAlign = "center";
  });
});

// Add event listener to each font color button
aAElements.forEach(function (aAButton) {
  aAButton.addEventListener("click", function () {
    textareaElement.style.color = "black"; // Change 'black' to the desired color
  });
});

// Add event listener to each text slash button
slashTElements.forEach(function (slashTButton) {
  slashTButton.addEventListener("click", function () {
    textareaElement.style.textDecoration = "line-through";
  });
});

// Add event listener to font size container
fontSizeContainer.addEventListener("input", function () {
  let fontSizeValue = fontSizeContainer.value;
  textareaElement.style.fontSize = fontSizeValue + "px";
});

// Add event listener for font color
colorInputElement.addEventListener("input", function () {
  let color = colorInputElement.value;
  textareaElement.style.color = color;
});
