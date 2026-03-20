// STEP 6: Nab all the SUMMARY elements
const details = document.querySelectorAll('details');

// STEP 7: Loop through the element array, and add an event listener for the toggle event
details.forEach(detail => {
    // STEP 8a: Check to see whether the DETAILS event that was toggled has the "open" attribute
    detail.addEventListener('toggle', (e) => {
        if(event.target.open){
            details.forEach(detail => {

                // STEP 8b: The browser just added the "open" attribute, so this DETAILS element was previously closed
                // STEP 8c: If this DETAILS element is NOT the one that was just clicked, close it by removing the "open" attribute
                if(detail != event.target) {
                    detail.removeAttribute("open");
                }

            })
        }
    })
});





// This experiment based on https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details