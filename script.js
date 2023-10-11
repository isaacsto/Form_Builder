        // Get the form element
        const form = document.querySelector('#form');

        // Add an event listener to the form
        form.addEventListener('submit', function(event) {
            // Prevent the default form submission behavior
            event.preventDefault();

            // Get the values of the input fields
            const formTitle = document.querySelector('#form-title').value;

            // Construct the HTML string
            const html = `
                <form>
                    <h2>${formTitle}</h2>
                </form>
            `;

            // Display the HTML string in the textarea
            const output = document.querySelector('#output-textarea');
            output.value = html;

            // Add a button to copy the code to the clipboard
            const copyButton = document.createElement('button');
            copyButton.textContent = 'Copy to Clipboard';
            copyButton.addEventListener('click', function() {
                navigator.clipboard.writeText(html);
            });
            form.appendChild(copyButton);
        });