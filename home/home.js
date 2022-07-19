var user = document.getElementById("user");
var u = sessionStorage.user;
user.innerHTML = `${u.username}`;