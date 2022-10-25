const user = document.getElementById("user");
const u = JSON.parse(sessionStorage.user);
user.innerHTML = `<h3>logged as: ${u.username}</h3>`;

const inpField = document.getElementById('inputField');
const searchBtn = document.getElementById('searchBtn');
const addBtn = document.getElementById('addBtn');
const searchAPI = 'http://localhost:0505/post/find';
var table = document.getElementById('table');
var post = null;

searchBtn.onclick = function () {
    fetch(searchAPI + `?param=${inpField.value}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*"
        }
    }   )
        .then(response => response.json())
        .then(json => {
            updateTable(json);
        })
}

function updateTable(json){
    table.innerHTML = `
    <thead>
        <th>Tieu de</th>
        <th>Nguoi dang</th>
        <th>thoi gian</th>
        <th>Hanh dong</th>
    </thead>
    `;
    json.forEach(item => {
        post = JSON.stringify(item);
        table.innerHTML += 
        `<tr>
            <input id="postId${item.id}" type ="hidden"/>
            <td>${item.title}</td>
            <td>${item.user.username}</td>
            <td>${item.date}</td>
            <td id="edit">
                <button onclick = "postDetails(post)">Xem</button>
            </td>
        </tr>`
        ;
    });
}

function postDetails(post){
    if(post === null) return;
    sessionStorage.removeItem("post");
    sessionStorage.setItem("post",post);
    window.location.href = '../postDetails/postDetails.html';
}