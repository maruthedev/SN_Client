var user = document.getElementById("user");
var u = JSON.parse(sessionStorage.user);
user.innerHTML = `<h3>logged as: ${u.username}</h3>`;