/* function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (you can enhance this with actual checks)
    if (username === 'admin' && password === 'password123') {
        window.location.href = 'dashboard.html'; // Redirect to the dashboard
    } else {
        alert('Invalid username or password');
    }
}
    */

// LoginValidation.js
// Initialize users storage if it doesn't exist
// LoginValidation.js

// Initialize users storage if it doesn't exist
if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify({}));
}

// Function to register a new user
function registerUser(username, password) {
    if (!username || !password) {
        alert('Please fill in all fields');
        return false;
    }

    const users = JSON.parse(localStorage.getItem('users'));
    
    // Check if username already exists
    if (users[username]) {
        alert('Username already exists! Please choose another one.');
        return false;
    }
    
    // Store new user (in real applications, passwords should be hashed!)
    users[username] = password;
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration successful! You can now login.');
    return true;
}

// Function to validate login
function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (!username || !password) {
        alert('Please fill in all fields');
        return;
    }

    const users = JSON.parse(localStorage.getItem('users'));
    
    // Check if user exists
    if (!users[username]) {
        alert('Username not found. Please register first.');
        return;
    }
    
    // Check if password matches
    if (users[username] !== password) {
        alert('Incorrect password. Please try again.');
        // Clear only the password field
        document.getElementById('password').value = '';
        return;
    }

    // If all checks pass, redirect to dashboard
    alert('Login successful!');
    window.location.href = 'dashboard.html';
}

// Function to toggle between login and registration forms
function toggleForm() {
    const loginForm = document.querySelector('.login-form');
    const isRegistering = loginForm.classList.toggle('registering');
    
    if (isRegistering) {
        loginForm.onsubmit = function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            if (registerUser(username, password)) {
                // Clear fields after successful registration
                document.getElementById('username').value = '';
                document.getElementById('password').value = '';
            }
        };
        document.querySelector('.login-button').textContent = 'REGISTER';
        document.querySelector('.toggle-form').textContent = 'Back to Login';
    } else {
        loginForm.onsubmit = function(event) {
            event.preventDefault();
            validateLogin();
        };
        document.querySelector('.login-button').textContent = 'LOGIN';
        document.querySelector('.toggle-form').textContent = 'Register New Account';
    }
}

// Function to clear stored credentials (for testing purposes)
function clearStoredCredentials() {
    localStorage.removeItem('users');
    localStorage.setItem('users', JSON.stringify({}));
    alert('All stored credentials have been cleared.');
}