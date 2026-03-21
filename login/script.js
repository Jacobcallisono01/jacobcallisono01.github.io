// script.js

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY_HERE",
    authDomain: "jacobcallisono-accounts.firebaseapp.com",
    projectId: "jacobcallisono-accounts",
    storageBucket: "jacobcallisono-accounts.appspot.com",
    messagingSenderId: "YOUR_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Create a shortcut for the Auth service
const auth = firebase.auth();

document.addEventListener('DOMContentLoaded', () => {

    // --- SIGN UP LOGIC ---
    // Get form elements
    const signupForm = document.querySelector('form');
    const emailInput = document.getElementById('mailbox');
    const passwordInput = document.getElementById('passbox1');
    const confirmPasswordInput = document.getElementById('passbox2');

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Stop the page from refreshing

        const email = emailInput.value;
        const password = passwordInput.value;

        // Check if passwords match
        if (password !== confirmPasswordInput.value) {
            alert("Passwords do not match!");
            return;
        }

        // Firebase Create User
        auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in!
            console.log("Success! Account created. Welcome to Jacobcallisono!");
            window.location.href = "../"; // Send them back to the homepage
        })
        .catch((error) => {
            // Handle Errors (like email already exists)
            alert("Error: " + error.message);
        });
    });

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
                console.log("Attempting to log as ", userBox.value);
                // Here is where you would normally use fetch() to send the login request to your server
            }
        });
    }
});
