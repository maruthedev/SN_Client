var title = document.getElementById('title');
var user = document.getElementById('user');
var date = document.getElementById('date');
var description = document.getElementById('description');

function onStart(){
    const post = JSON.parse(sessionStorage.getItem('post'));
    title.innerHTML = `<h1> Tieu de: ${post.title} </h1>`;
    user.innerHTML = `<h2>Nguoi dang: ${post.user.username}</h2>`;
    date.innerHTML = `<h2>Thoi gian: ${post.date}</h2>`;
    description.innerHTML = `<h2> <p>Noi dung:</p> ${post.description}</h2>`;
}

onStart();