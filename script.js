const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")

const text = document.querySelector("#text")

// Step 1: Select all buttons with a common class (e.g., "my-button")
const buttons = document.querySelectorAll('.btn');

// Step 2: Add a click event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', function() {
    // Your event handling code here
    console.log(`Button ${button.textContent} clicked!`);
    changeText(button.textContent)
  });
});


function changeText(buttonName) {
    text.innerHTML = `This is my new text clicked by ${buttonName}`
}