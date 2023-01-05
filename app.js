/* Imports */
const nameInput = document.getElementById('nameinput');
const submitButton = document.getElementById('submitbutton');
const nameDisplay = document.getElementById('nametag');

/* Get DOM Elements */

/* State */

/* Events */
submitButton.addEventListener('click', () => {
    nameDisplay.textContent = nameInput.value;
    nameInput.value = '';
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
