// Get the form element
const form = document.querySelector('form');

// Add an event listener to the form
form.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the values of the input fields
    const formTitle = document.querySelector('#form-title').value;
    const firstNameLabel = document.querySelector('#first-name-label').value;
    const firstNameInput = document.querySelector('#first-name-input').value;
    const lastNameLabel = document.querySelector('#last-name-label').value;
    const lastNameInput = document.querySelector('#last-name-input').value;

    // Construct the HTML string
    const html = `
        <form>
            <h2>${formTitle}</h2>
            <label for="first-name">${firstNameLabel}</label>
            <input type="text" id="first-name" name="first-name" value="${firstNameInput}">
            <label for="last-name">${lastNameLabel}</label>
            <input type="text" id="last-name" name="last-name" value="${lastNameInput}">
        </form>
    `;

    // Display the HTML string to the user
    const output = document.querySelector('#output');
    output.innerHTML = html;

    // Add a button to copy the code to the clipboard
    const copyButton = document.createElement('button');
    copyButton.textContent = 'Copy to Clipboard';
    copyButton.addEventListener('click', function() {
        navigator.clipboard.writeText(html);
    });
    output.appendChild(copyButton);
});
