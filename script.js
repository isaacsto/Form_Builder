        // Get form element
        const form = document.querySelector('#form');

        // Add event listener to form
        form.addEventListener('submit', function(event) {
            // Prevent the default form submission behavior
            event.preventDefault();

            // Get values of input fields
            const formTitle = document.querySelector('#form-title').value;
            const firstAction = document.querySelector('#first-action').value;
            const formClass = document.querySelector('#form-class').value;
            const formId = document.querySelector('#form-id').value;

            const firstClass = document.querySelector('#class-one').value;
            const firstLabel = document.querySelector('#label-one').value;
            const firstName = document.querySelector('#name-one').value;
            const firstId = document.querySelector('#id-one').value;

            const secondLabel = document.querySelector('#second-label').value;
            const secondClass = document.querySelector('#second-class').value;
            const thirdLabel = document.querySelector('#third-label').value;
            const thirdClass = document.querySelector('#third-class').value;


            const buttonLabel = document.querySelector('#button-label').value;
            const buttonType = document.querySelector('#button-type').value;

            // Construct HTML string
            const html = `
                <form class="${formClass}" id="${formId}"action="${firstAction}">
                    <h2>${formTitle}</h2>

                    <label class="${firstClass}">${firstLabel}</label>
                    <input type="text" id="generated-input">
                   
                    <label class="${secondClass}" name="${firstName} id="${firstId}">${secondLabel}</label>
                    <input type="text" id="generated-input">

                    <label class="${thirdClass}">${thirdLabel}</label>
                    <input type="text" id="generated-input">
                    <button type="${buttonType}">${buttonLabel}</button>
                </form>
            `;

            // Display in textarea
            const output = document.querySelector('#output-textarea');
            output.value = html;

            // copy button
            const copyButton = document.querySelector('#copy');
           
            copyButton.addEventListener('click', function() {
                navigator.clipboard.writeText(html)
                .then(() => {
                    alert('Copied to clipboard!');
                });
            });
           
        });

     