var API = "http://localhost:0505/user/signIn";

var un = document.getElementById("username");
var pw = document.getElementById("password");
var loginBtn = document.getElementById("login");

loginBtn.onclick = function () {
    sessionStorage.clear();
    var account = {
        username: un.value,
        password: pw.value
    }
    fetch(API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(account)
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            sessionStorage.setItem("user", JSON.stringify(json));
            window.location.href = "./home/home.html";
        })
        .catch(function (ex) {
            alert(`Sai tai khoan hoac mat khau`);
        })
}

