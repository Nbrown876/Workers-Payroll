document.addEventListener('DOMContentLoaded', function() {
    // Home button functionality
    document.querySelector('.home-btn').addEventListener('click', function() {
        window.location.href = 'dashboard.html';
    });

    // Save & Close button functionality
    document.querySelector('.btn-save').addEventListener('click', function() {
        // Add save logic here
        saveFormData();
        window.location.href = 'dashboard.html';
    });

    // Grant leave buttons functionality
    document.querySelectorAll('.btn-grant').forEach(button => {
        button.addEventListener('click', function() {
            const leaveType = button.textContent.includes('PAID') ? 'PAID' : 'UNPAID';
            grantLeave(leaveType);
            window.location.href = 'dashboard.html';
        });
    });

    // Sidebar menu functionality
    document.querySelectorAll('.sidebar-item').forEach(item => {
        item.addEventListener('click', function() {
            handleSidebarNavigation(this.textContent);
        });
    });
});

function saveFormData() {
    // Collect form data
    const formData = {
        employeeId: document.querySelector('input[placeholder="EMPLOYEE ID"]').value,
        firstName: document.querySelector('input[placeholder="FIRST NAME"]').value,
        // Add more fields as needed
    };
    
    // Save logic here (e.g., API call or localStorage)
    console.log('Saving form data:', formData);
}

function grantLeave(leaveType) {
    // Grant leave logic here
    console.log(`Granting ${leaveType} leave`);
    alert(`${leaveType} leave request processed`);
}

function handleSidebarNavigation(menuItem) {
    switch(menuItem) {
        case 'MAIN MENU':
            window.location.href = 'dashboard.html';
            break;
        case 'VIEW PREVIOUS LEAVE REQUESTS':
            // Handle navigation to previous requests
            console.log('Viewing previous requests');
            break;
        case 'VIEW CURRENT LEAVE REQUESTS':
            // Handle navigation to current requests
            console.log('Viewing current requests');
            break;
        // Add more cases as needed
    }
}