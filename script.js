        // Get form element
        const form = document.querySelector('#form');

        // Add event listener to form
        form.addEventListener('submit', function(event) {
            // Prevent the default form submission behavior
            event.preventDefault();

            // Get values of input fields
            const formTitle = document.querySelector('#form-title').value;
            const firstLabel = document.querySelector('#first-label').value;

            // Construct HTML string
            const html = `
                <form>
                    <h2>${formTitle}</h2>
                    <label>${firstLabel}</label>
                    <input type="text" id="generated-input">
                </form>
            `;

            // Display in textarea
            const output = document.querySelector('#output-textarea');
            output.value = html;

            // copy button
            const copyButton = document.querySelector('#copy-button');
           
            copyButton.addEventListener('click', function() {
                navigator.clipboard.writeText(html);
            });
           
        });

     