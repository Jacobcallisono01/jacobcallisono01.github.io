// script.js
document.addEventListener('DOMContentLoaded', () => {

    // --- SIGN UP LOGIC ---
    const signupForm = document.querySelector('form');
    
    if (signupForm && window.location.pathname.includes('signup')) {
        signupForm.addEventListener('submit', (e) => {
            // Get the two password fields
            const password = document.querySelector('input[name="password"]').value;
            // Here we grab the second password field by its name attribute
            const confirmPassword = document.querySelector('input[name="confirmpass"]').value;
            const guidelinesChecked = document.getElementById('guidelineagree').checked;

            if (password !== confirmPassword) {
                e.preventDefault(); // Stop the form from submitting
                alert("Passwords do not match.");
            } else if (!guidelinesChecked) {
                e.preventDefault();
                alert("You must agree to the Privacy Policy and Terms of Service.");
            } else {
                console.log("Validation passed! Preparing to sync to Jacobcallisono Backend...");
                // The form will now submit to "../" as defined in your action attribute
            }
        });
    }

    // --- LOGIN LOGIC ---
    // If we are on the login page (which currently doesn't have a <form> tag)
    const loginButton = document.querySelector('button');
    const userBox = document.getElementById('userbox');

    if (loginButton && window.location.pathname.includes('login')) {
        loginButton.addEventListener('click', (e) => {
            if (userBox && userBox.value.trim() === "") {
                e.preventDefault();
                alert("Please enter your Jacobcallisono username or e-mail.");
            } else {
                console.log("Attempting to log into Jacobcallisono OS ecosystem for:", userBox.value);
                // Here is where you would normally use fetch() to send the login request to your server
            }
        });
    }
});
