var API = "http://localhost:0505/user/signUp";

var un = document.getElementById("username");
var pw = document.getElementById("password");
var rtpw = document.getElementById("retypepassword");
var signUpBtn = document.getElementById("signUp");

signUpBtn.onclick = function () {
    if (pw.value !== rtpw.value) {
        alert("Mat khau phai trung khop");
        return;
    }
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
            window.location.href = "../home/home.html";
        })
}

