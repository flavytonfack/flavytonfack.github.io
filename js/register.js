// Script 10.7- register.js
// This script validates a form.

// Function called when the form is submitted.
// Function validates the form data.


function validatefirstname(firstname, message) {

    var char1;
    var hasNumber;

    if (firstname.value == "") {
        message.valueOf = "First Name is required";
        document.getElementById('firstName').style.borderColor = "red";
        return false;
    }

    if (firstname.length > 40) {
        message.valueOf = "First Name must be at most 40 characters";
        document.getElementById('lastName').style.borderColor = "red";
        return false;
    }

    return true;
}


function validatelastname(lastname, message) {

    if (lastname.value == "") {
        message.valueOf = "Last Name is required";
        document.getElementById('lastName').style.borderColor = "1red";
        return false;
    }

    if (lastname.length > 40) {
        message.valueOf = "Last Name must be at most 40 characters";
        document.getElementById('lastName').style.borderColor = "red";
        return false;
    }

    return true;
}

function validateForm(e) {
    'use strict';

    // Get the event object:
    if (typeof e == 'undefined') e = window.event;

    // Get form references:
    var firstName = U.$('firstName');
    var lastName = U.$('lastName');
    var address = U.$('address')
    var email = U.$('email');
    var phone = U.$('phone');
    var city = U.$('city');
    var state = U.$('state');
    var zip = U.$('zip');
    var terms = U.$('terms');
    var income = U.$('income');
    var education = U.$('education');
    var password = U.$('password');
    var confirmpassword = U.$('confirmpassword');


    // Flag variable:
    var error = false;

    //validate password
    if (password.value != confirmpassword.value) {
        addErrorMessage('password', 'Password does not match');
        document.getElementById('password').style.borderColor = "red";
        document.getElementById('confirmpassword').style.borderColor = "red";
        error = true;
    }


    // Validate the first name:
    if (/^[A-Z \.\-']{2,20}$/i.test(firstName.value)) {
        //Everything between / and / is the expression
        //Allows any letter A-Z, case insensitive
        //Allows space, period, hyphen
        //Must be 2-20 characters long
        removeErrorMessage('firstName');
    } else {
        addErrorMessage('firstName', 'Please enter your first name.');
        document.getElementById('firstName>').style.borderColor = "red";
        error = true;
    }

    // Validate the last name:
    if (/^[A-Z \.\-']{2,20}$/i.test(lastName.value)) {
        removeErrorMessage('lastName');
    } else {
        addErrorMessage('lastName', 'Please enter your last name.');
        document.getElementById('lastName').style.borderColor = "red";
        error = true;
    }

    // Validate the email address:
    if (/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,6}$/.test(email.value)) {
        removeErrorMessage('email');
    } else {
        addErrorMessage('email', 'Please enter your email address.');
        document.getElementById('email').style.borderColor = "red";
        error = true;
    }

    //Validate the last name using a validation function:
    var msg = "initial message";
    msg = Object(msg);
    if(validatefirstname(firstName.value, msg)) {
        //The username meets requirements
        removeErrorMessage('firstName');
    }
    else {
        addErrorMessage('firstName', msg.valueOf);
        error = true;
    }

    // Validate the phone number:
    if (/\d{3}[ \-\.]?\d{3}[ \-\.]?\d{4}/.test(phone.value)) {
        removeErrorMessage('phone');
    } else {
        addErrorMessage('phone', 'Please enter your phone number.');
        document.getElementById('phone').style.borderColor = "red";
        error = true;
    }

    // Validate the city:
    if (/^[A-Z \.\-']{2,20}$/i.test(city.value)) {
        removeErrorMessage('city');
    } else {
        addErrorMessage('city', 'Please enter your city.');
        document.getElementById('city').style.borderColor = "red";
        error = true;
    }

    if (city.value > 40) {
        addErrorMessage('city', 'City must be up to 40 Characters');
        document.getElementById('city').style.borderColor = "red";
        error = true;
    }

    // Validate the state:
    if (state.selectedIndex != 0) {
        removeErrorMessage('state');
    } else {
        addErrorMessage('state', 'Please select your state.');
        document.getElementById('state').style.borderColor = "red";
        error = true;
    }


    // Validate income:
    if (income.selectedIndex != 0) {
        removeErrorMessage('income');
    } else {
        addErrorMessage('income', 'Please select your income.');
        document.getElementById('income').style.borderColor = "red";
        error = true;
    }


    // Validate education:
    if (education.selectedIndex != 0) {
        removeErrorMessage('education');
    } else {
        addErrorMessage('education', 'Please select your education.');
        document.getElementById('education').style.borderColor = "red";
        error = true;
    }


    // Validate the zip code:
    if (/^\d{5}(-\d{4})?$/.test(zip.value)) {
        removeErrorMessage('zip');
    } else {
        addErrorMessage('zip', 'Please enter your zip code.');
        document.getElementById('zip').style.borderColor = "red";
        error = true;
    }



    //validate address
    if (address.value == "") {
        addErrorMessage('address','Please enter your address');
        document.getElementById('address').style.borderColor = "red";
        error = true;
    }

    if (address.length > 40) {
        addErrorMessage('address', 'Address must be up to 40 character');
        document.getElementById('address').style.borderColor = "red";
        error = true;
    }



    // If an error occurred, prevent the default behavior:
    if (error) {

        // Prevent the form's submission:
        if (e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }
        return false;

    }

} // End of validateForm() function.

// Function called when the terms checkbox changes.
// Function enables and disables the submit button.
function toggleSubmit() {
    'use strict';

    // Get a reference to the submit button:
    var submit = U.$('submit');

    // Toggle its disabled property:
    if (U.$('terms').checked) {
        submit.disabled = false;
    } else {
        submit.disabled = true;
    }

} // End of toggleSubmit() function.

// Establish functionality on window load:
window.onload = function() {
    'use strict';

    // The validateForm() function handles the form:
    U.addEvent(U.$('theForm'), 'submit', validateForm);

    // Disable the submit button to start:
    U.$('submit').disabled = true;

    // Watch for changes on the terms checkbox:
    U.addEvent(U.$('terms'), 'change', toggleSubmit);

    // Enbable tooltips on the phone number:
    U.enableTooltips('phone');

};

















