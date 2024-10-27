// Array of colors to switch between
const colors = ["#FF5733", "#33FF57", "#3357FF", "#F0F033", "#F033F0"];

let currentColorIndex = 0;
let intervalId = null; // Variable to hold the interval ID

// Function to change the background color
function changeBackgroundColor() {
  document.body.style.backgroundColor = colors[currentColorIndex];
  currentColorIndex = (currentColorIndex + 1) % colors.length; // Loop through colors
}

// Function to start the color change
function startColorChange() {
  if (!intervalId) { // Only start if not already running
    intervalId = setInterval(changeBackgroundColor, 1000);
  }
}

// Function to stop the color change
function stopColorChange() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null; // Reset the interval ID
  }
}

// Add event listeners to buttons
document.getElementById('startBtn').addEventListener('click', startColorChange);
document.getElementById('stopBtn').addEventListener('click', stopColorChange);
