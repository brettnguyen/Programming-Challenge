
function validatePhone(input) {
    input.value = input.value.replace(/\D/g, '');
}

function validatePromoCode(input) {
    input.value = input.value.replace(/[^a-zA-Z0-9]/g, '');
}

function validateEmail() {
    var emailInput = document.getElementById('email');
    var errorDiv = document.getElementById('emailError');

    if (emailInput.validity.typeMismatch) {
        errorDiv.style.display = 'block';
    } else {
        errorDiv.style.display = 'none';
    }
}

function showTermsPopup() {
    alert("All cancellation requests must be received by March 1, 2022\n" +
          "All cancellation requests are subject to a $100 cancellation fee.\n" +
          "No one under the age of 16 will be allowed on the show floor");
}

function checkHowDidYouHear() {
    var select = document.getElementById("howDidYouHear");
    var otherSpecify = document.getElementById("specifyOther");

    if (select.value === "Other") {
        otherSpecify.style.display = "block";
        otherSpecify.querySelector("input").required = true;
    } else {
        otherSpecify.style.display = "none";
        otherSpecify.querySelector("input").required = false;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("registrationForm");
    var elements = form.elements;
    var number = document.getElementById('phone')

    function checkFormValidity() {
        if (form.checkValidity() && number.value.replace(/\D/g, '').length == 10) {
            document.getElementById("successMessage").style.display = "block";
        } else {
            document.getElementById("successMessage").style.display = "none";
        }
    }

    Array.from(elements).forEach(function(element) {
        element.addEventListener('input', checkFormValidity);
        element.addEventListener('change', checkFormValidity); 
    });

    document.getElementById("successMessage").style.display = "none";
});



function validateForm() {
    var form = document.getElementById("registrationForm");
    var promoCode = document.getElementById("promoCode").value;
    var howDidYouHear = document.getElementById("howDidYouHear").value;
    var otherSpecify = document.getElementById("otherSpecify").value;
    var emailInput = document.getElementById('email');
    var fName = document.getElementById('firstName')
    var lName = document.getElementById('lastName')
    var number = document.getElementById('phone')
  
    if (!promoCode && howDidYouHear == "") {
        alert('Please fill in the "How did you hear" field if promo code is not provided.');
        return false;
    }

    if (howDidYouHear === "Other" && !otherSpecify) {
        alert('Please specify how you heard about us.');
        return false;
    }

    if(emailInput.value == "" || fName.value == "" || lName.value == "" || number.value.replace(/\D/g, '').length < 10) {
        alert("Please check the form for errors.");
        return false;
    }

    if (form.checkValidity()) {
        alert('Success');
        return true;
    } 
}



