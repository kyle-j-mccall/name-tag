// import functions and grab DOM elements

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

const userName = document.getElementById('user-name');
const nameBtn = document.getElementById('name-btn');
const nameInput = document.getElementById('name-input');
const colorBtn = document.getElementById('color-btn');
const colorInput = document.getElementById('color-input');
const topColor = document.getElementById('top-section');
const bottomColor = document.getElementById('bottom-section')

const fontSelect = document.getElementById('fonts');


nameBtn.addEventListener('click', () => {
  const value = nameInput.value
  userName.textContent = value;
});

colorBtn.addEventListener('click', () => {
  const color = colorInput.value;
  topColor.style.backgroundColor = color;
  bottomColor.style.backgroundColor = color;
  
  
})

fontSelect.addEventListener('change', (e) => {
  console.log(e.target.value);
  userName.style.fontFamily = e.target.value;
})






