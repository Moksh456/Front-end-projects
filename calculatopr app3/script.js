// Select the input (no class) and all buttons with class 'buttons'
const input = document.querySelector('input');
const buttons = document.querySelectorAll("button");
// Create an array from the NodeList of buttons
let arr = Array.from(buttons);

/*
    Update the "C" button to clear only the last character from the input value.
*/
 
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        // Handle "C" button to clear only the last character
        if (value === 'C') {
            input.value = input.value.slice(0, -1);
            return;
        }
        if (value === 'C') {
            input.value = value.substring(0, value.lenght  -1);
        } else if (value === '=') {
            try {
                input.value = eval(input.value);
            } catch {
                input.value = 'Error';
            }
        } else if (value === 'AC') {
            input.value = "";
        } else {
            input.value += value;
        }
    
    });
});