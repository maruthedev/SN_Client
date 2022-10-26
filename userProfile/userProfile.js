var usernameI = document.getElementById('usernameI');
var fullNameI = document.getElementById('fullNameI');
var dobI = document.getElementById('dobI');
var saveBtn = document.getElementById('saveBtn');
const API = 'http://localhost:0505/user/update';

const user = JSON.parse(sessionStorage.getItem('user'));

usernameI.value = user.username;
fullNameI.placeholder = user.fullName === null ? '*Chua dang ky' : username.fullName;
dobI.placeholder = user.dob === null ? '*Chua dang ky' : user.dob;

saveBtn.onclick = function () {
    const editedUser = {
        username: `${usernameI.value}`,
        fullName: `${fullNameI.value}`,
        dob: `${dobI.value}`
    }

    fetch(API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(editedUser)
    })
        .then(response => response.json())
        .then(json => {
            confirm('Sua thong tin thanh cong');
            window.location.href = '../home/home.html';
        })
        .catch(ex => alert(ex))
}
