document.addEventListener('DOMContentLoaded', function() {
    // Clear form functionality
    document.querySelector('.clear').addEventListener('click', function() {
        document.querySelectorAll('input, textarea').forEach(input => {
            input.value = '';
        });
    });

    // Save functionality
    document.querySelector('.save').addEventListener('click', function() {
        alert('Payment details saved successfully!');
    });

    // Submit payment functionality
    document.querySelector('.submit').addEventListener('click', function() {
        alert('Payment submitted successfully!');
    });

    // Edit functionality
    document.querySelector('.edit').addEventListener('click', function() {
        const inputs = document.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.readOnly = !input.readOnly;
        });
    });

    // Window control buttons
    document.querySelector('.minimize').addEventListener('click', function() {
        // Minimize window functionality
    });

    document.querySelector('.maximize').addEventListener('click', function() {
        // Maximize window functionality
    });

    document.querySelector('.close').addEventListener('click', function() {
        window.location.href = 'dashboard.html';
    });
});