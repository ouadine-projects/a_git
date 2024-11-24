// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("change-text-button");
    const message = document.getElementById("welcome-message");
  
    // Add an event listener to the button
    button.addEventListener("click", function () {
      message.textContent = "You clicked the button!";
      button.style.backgroundColor = "#03dac5";
      button.textContent = "Clicked!";
    });
  });
  