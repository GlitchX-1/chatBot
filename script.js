document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    if (username.value.trim() === '') {
        username.classList.add('is-invalid');
        isValid = false;
    } else {
        username.classList.remove('is-invalid');
    }

    if (email.value.trim() === '' || !validateEmail(email.value)) {
        email.classList.add('is-invalid');
        isValid = false;
    } else {
        email.classList.remove('is-invalid');
    }

    if (password.value.trim() === '') {
        password.classList.add('is-invalid');
        isValid = false;
    } else {
        password.classList.remove('is-invalid');
    }

    if (isValid) {
        addUser(username.value, email.value);
        username.value = '';
        email.value = '';
        password.value = '';
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function addUser(username, email) {
    const userList = document.getElementById('userList');
    const rowCount = userList.rows.length;
    const row = userList.insertRow(rowCount);

    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);

    cell1.innerHTML = rowCount + 1;
    cell2.innerHTML = username;
    cell3.innerHTML = email;
    cell4.innerHTML = '<button class="btn btn-danger btn-sm" onclick="deleteUser(this)">Delete</button>';
}

function deleteUser(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
