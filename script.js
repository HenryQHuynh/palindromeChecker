// Relevant DOM elements
const button = document.querySelector("#btn");
const inputText = document.querySelector("#input-text");
const result = document.querySelector("#result");

const music = document.querySelector("#music");
const playButton = document.querySelector("#playButton");

playButton.addEventListener("click", () => {
   if (music.paused) {
      music.play();
      playButton.classList.remove("play");
   } else {
      music.pause();
      playButton.classList.add("play");
   }
});


// Adding Event Listener to Button
button.addEventListener("click", () => {
   // Input value and trim empty spaces
   const text = inputText.value.trim();

   // An alert for empty input
   if (text.length == 0) {
      alert("Input cannot be empty!");
      return;
   }

   // Remove any  alphanumeric characters and convert the word into loswercase
   const cleanText = text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

   // Check if adjusted text is a palindrome by comparing original and reversed strings
   const isPalindrome = cleanText === cleanText.split("").reverse().join("");

   // Final message  based on if input is a palindrome or not
   const message = isPalindrome ? 
      `<span>Nice! </span>This is a palindrome!`
      : `<span>Sorry! </span>This is not a palindrome.`;

   // Update the results with a message
   result.innerHTML  = message;
   result.classList.remove("error", "success");
   setTimeout(() => {
      result.classList.add(isPalindrome ? "success" : "error");
   }, 10)
});