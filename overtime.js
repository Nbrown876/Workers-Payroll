// Initialize request counter and load saved requests
let requestCounter = 1000;
const requests = JSON.parse(localStorage.getItem('overtimeRequests') || '[]');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
});

function initializePage() {
    document.getElementById('requestDate').valueAsDate = new Date();
    document.getElementById('requestNo').value = generateRequestNumber();
}

function generateRequestNumber() {
    return `OT${++requestCounter}`;
}

function addNewRow() {
    const tbody = document.getElementById('overtimeBody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td><input type="date" class="date-input"></td>
        <td><input type="date" class="date-input"></td>
        <td><input type="time" class="time-input"></td>
        <td><input type="time" class="time-input"></td>
    `;
    tbody.appendChild(newRow);
}

function newRequest() {
    clearForm();
    document.getElementById('requestNo').value = generateRequestNumber();
    document.getElementById('requestDate').valueAsDate = new Date();
}

function saveRequest() {
    const requestData = {
        requestNo: document.getElementById('requestNo').value,
        date: document.getElementById('requestDate').value,
        fullName: document.getElementById('fullName').value,
        department: document.getElementById('department').value,
        email: document.getElementById('email').value,
        supervisor: document.getElementById('supervisor').value,
        overtimeDetails: getOvertimeDetails(),
        status: 'PENDING'
    };

    if (!validateRequestData(requestData)) {
        alert('Please fill in all required fields');
        return;
    }

    requests.push(requestData);
    localStorage.setItem('overtimeRequests', JSON.stringify(requests));
    alert('Request saved successfully!');
}

function getOvertimeDetails() {
    const details = [];
    const rows = document.getElementById('overtimeBody').getElementsByTagName('tr');
    
    for (let row of rows) {
        const inputs = row.getElementsByTagName('input');
        details.push({
            startDate: inputs[0].value,
            endDate: inputs[1].value,
            startTime: inputs[2].value,
            endTime: inputs[3].value
        });
    }
    
    return details;
}

function validateRequestData(data) {
    return data.fullName && 
           data.department && 
           data.email && 
           data.supervisor && 
           data.overtimeDetails.length > 0;
}

function deleteRequest() {
    const requestNo = document.getElementById('requestNo').value;
    const index = requests.findIndex(r => r.requestNo === requestNo);
    
    if (index > -1) {
        requests.splice(index, 1);
        localStorage.setItem('overtimeRequests', JSON.stringify(requests));
        clearForm();
        alert('Request deleted successfully!');
    }
}

function submitRequest() {
    saveRequest();
    // Here you would typically send the request to a backend server
    alert('Request submitted successfully!');
    clearForm();
}

function saveAndClose() {
    saveRequest();
    window.location.href = 'dashboard.html';
}

function clearForm() {
    document.getElementById('fullName').value = '';
    document.getElementById('department').value = '';
    document.getElementById('email').value = '';
    document.getElementById('supervisor').value = '';
    
    const tbody = document.getElementById('overtimeBody');
    tbody.innerHTML = `
        <tr>
            <td><input type="date" class="date-input"></td>
            <td><input type="date" class="date-input"></td>
            <td><input type="time" class="time-input"></td>
            <td><input type="time" class="time-input"></td>
        </tr>
    `;
}

function printRequest() {
    window.print();
}