// Get references to elements
const countDisplay = document.getElementById('count');
const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');
const clearBtn = document.getElementById('clear');
const errorText = document.getElementById('Error');

// Initial count value
let count = 0;
if (count === 0) {
    clearBtn.style.display = 'none';
}
// Update count display
function updateCountDisplay() {
    countDisplay.textContent = count;
}

// Update error display
function updateErrorDisplay(showError) {
    errorText.style.display = showError ? 'block' : 'none';
}

// Initialize display
updateCountDisplay();
updateErrorDisplay(false);

// Increment button click event
increaseBtn.addEventListener('click', function() {
    count++;
    updateCountDisplay();
    updateErrorDisplay(false);
    if (count > 0) {
        clearBtn.style.display = 'inline';
    }
});

// Decrement button click event
decreaseBtn.addEventListener('click', function() {
    if (count > 0) {
        count--;
        updateCountDisplay();
        updateErrorDisplay(false);
    } else {
        updateErrorDisplay(true);
    }
    if (count === 0) {
        clearBtn.style.display = 'none';
    }
});

// Clear button click event
clearBtn.addEventListener('click', function() {
    count = 0;
    updateCountDisplay();
    updateErrorDisplay(false);
    clearBtn.style.display = 'none';
});
