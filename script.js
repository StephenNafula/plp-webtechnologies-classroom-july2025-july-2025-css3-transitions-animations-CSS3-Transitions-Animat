// ====================
// Part 2: Functions, Scope & Logic
// ====================

// Global variable
let box = document.querySelector('.animated-box');

// Function with parameter + return value
function changeBoxColor(color) {
  box.style.background = color;
  return `Box color changed to ${color}`;
}

// Function demonstrating local vs global scope
function scopedExample() {
  let localMessage = "I'm local!";
  console.log(localMessage); // accessible
}
scopedExample();
// console.log(localMessage); // would throw error - out of scope

// Function to trigger animation via class
function animateBox() {
  box.classList.add('animate');

  // Remove the animation class after it finishes, so it can replay
  setTimeout(() => {
    box.classList.remove('animate');
  }, 1000);
}

// ====================
// Part 3: Combining JS + CSS
// ====================

// Button: change box color dynamically
document.getElementById('colorBtn').addEventListener('click', () => {
  // Generate a random color
  const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 80%, 60%)`;
  console.log(changeBoxColor(randomColor)); // call function
  animateBox(); // trigger bounce animation
});

// Modal logic
const modal = document.getElementById('modal');
const openBtn = document.getElementById('openModal');
const closeBtn = document.getElementById('closeModal');

openBtn.addEventListener('click', () => {
  modal.classList.remove('hidden'); // fade in
});

closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden'); // fade out
});
