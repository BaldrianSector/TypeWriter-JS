const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const text = document.querySelector("#text");

// Step 1: Select all buttons with a common class (e.g., "my-button")
const buttons = document.querySelectorAll('.btn');

// Create an object to store interval IDs for each button
const intervalIds = {};

// Step 2: Add a click event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', function() {
    // Clear the previous interval for this button if it exists
    if (intervalIds[button.textContent]) {
      clearInterval(intervalIds[button.textContent]);
    }
    
    // Your event handling code here
    console.log(`Button ${button.textContent} clicked!`);
    typeWriter(text, button.textContent, typingInterval, button);
  });
});

const typingInterval = 50; // Adjust the typing speed as needed.

function typeWriter(textElement, exampleText, interval, button) {
  let originalText = exampleText.split("");
  let typedText = [];

  const intervalId = setInterval(function() {
    if (originalText.length > 0) {
      typedText.push(originalText.shift());
      textElement.innerHTML = typedText.join("");
    } else {
      clearInterval(intervalId);
      // Store the intervalId for this button
      intervalIds[button.textContent] = null;
    }
  }, interval);

  // Store the intervalId for this button
  intervalIds[button.textContent] = intervalId;
}

// Pseudocode:

// Get text as a parameter and store each letter in a split array
// Make an empty array to change and return the written text
// Push the first letter of the split array into the empty array
// Shift the first letter of the split array
// Return typedText as HTML/string?
// Delay 50 milliseconds between each character with setInterval
// Repeat until the split array is empty