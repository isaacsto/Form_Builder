/* const more = document.querySelector('#more');

more.addEventListener('click', function(event) {

    event.preventDefault();

    const newRow = `     <div class="new-row">
    <div class="col">
        <label for="label" class="label">Label: </label>
        <input type="text" id="label-five" name="label-five" placeholder="optional">
    </div>
    <div class="col">
        <label class="label" for="label">Class: </label>
        <input type="text" id="class-five" name="class-five" placeholder="if any">
    </div>

    <div class="col">
        <label class="label" for="label">Name: </label>
        <input type="text" id="name-five" name="name-five" placeholder="if any">
    </div>
    <div class="col">
        <label class="label" for="label">Id: </label>
        <input type="text" id="id-five" name="id-five" placeholder="if any">
    </div>
</div> `;
const rowElement = document.querySelector('#new-row');

rowElement.insertAdjacentHTML('beforeend', newRow);

    
});    */
document.addEventListener('DOMContentLoaded', function() {
    // Get form element
    form = document.querySelector('#gen');

    // Add event listener to form
    form.addEventListener('click', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get values of input fields
        const formTitle = document.querySelector('#form-title').value;
        const formAction = document.querySelector('#form-action').value;
        const formClass = document.querySelector('#form-class').value;
        const formId = document.querySelector('#form-id').value;

        const firstClass = document.querySelector('#class-one').value;
        const firstType = document.querySelector('#type-one').value;
        const firstLabel = document.querySelector('#label-one').value;
        const firstName = document.querySelector('#name-one').value;
        const firstId = document.querySelector('#id-one').value;
        const inputIdOne = document.querySelector('#input-id-one').value;
      
        const secondClass = document.querySelector('#class-two').value;
        const secondType = document.querySelector('#type-two').value;
        const secondLabel = document.querySelector('#label-two').value;
        const secondName = document.querySelector('#name-two').value;
        const secondId = document.querySelector('#id-two').value;
        const inputIdTwo = document.querySelector('#input-id-two').value;

        const thirdLabel = document.querySelector('#label-three').value;
        const thirdType = document.querySelector('#type-three').value;
        const thirdClass = document.querySelector('#class-three').value;
        const thirdName = document.querySelector('#name-three').value;
        const thirdId = document.querySelector('#id-three').value;
        const inputIdThree = document.querySelector('#input-id-three').value;

        const fourthLabel = document.querySelector('#label-four').value;
        const fourthType = document.querySelector('#type-four').value;
        const fourthClass = document.querySelector('#class-four').value;
        const fourthName = document.querySelector('#name-four').value;
        const fourthId = document.querySelector('#id-four').value;
        const inputIdFour = document.querySelector('#input-id-four').value;

        const buttonLabel = document.querySelector('#button-label').value;
        const buttonAction = document.querySelector('#button-action').value;
        const buttonType = document.querySelector('#button-type').value;
        const buttonClass = document.querySelector('#button-class').value;
        const buttonId = document.querySelector('#button-id').value;
    

        //required 

        let reqCheck1 = '';
            const checkbox1 = document.querySelector(`#checkbox1`);
            if(checkbox1.checked){
                reqCheck1 = 'required';
            }
            let reqCheck2 = '';
            const checkbox2 = document.querySelector(`#checkbox2`);
            if(checkbox2.checked){
                reqCheck2 = 'required';
            }
            let reqCheck3 = ''; 
            const checkbox3 = document.querySelector(`#checkbox3`);
            if(checkbox3.checked){
                reqCheck3 = 'required';
            }
            let reqCheck4 = '';
            const checkbox4 = document.querySelector(`#checkbox4`);
            if(checkbox4.checked){
                reqCheck4 = 'required';
            }
    
        // Construct HTML string
        const html = `
            <form class="${formClass}" id="${formId}"action="${formAction}">
                <h2>${formTitle}</h2>

                <label class="${firstClass}" name="${firstName}" id="${firstId}">${firstLabel}
                <input type="${firstType}" id="${inputIdOne}"  ${reqCheck1}></label>
                
                <label class="${secondClass}" name="${secondName}" id="${secondId}">${secondLabel}
                <input type="${secondType}" id="${inputIdTwo}"  ${reqCheck2}></label>
                
                <label class="${thirdClass}" name="${thirdName}" id="${thirdId}">${thirdLabel}
                <input type="${thirdType}" id="${inputIdThree}"  ${reqCheck3}></label>

                <label class="${fourthClass}" name="${fourthName}" id="${fourthId}">${fourthLabel}
                <input type="${fourthType}" id="${inputIdFour}"  ${reqCheck4}></label>
               
                <button type="${buttonType}" class="${buttonClass}"id="${buttonId}" action="${buttonAction}">${buttonLabel}</button>
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

});

//placeholder hide on select 

