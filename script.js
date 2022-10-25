const title = document.getElementById('title');
const body = document.getElementById('body');
const story = document.getElementById('story');
const postButton = document.getElementById('lib-button-post');
const getButton = document.getElementById('lib-button-get');
const putButton = document.getElementById('lib-button-put');
const patchButton = document.getElementById('lib-button-patch');
const deleteButton = document.getElementById('lib-button-delete');


getButton.addEventListener('click', getPosts);

function getPosts() {
  fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then(data => console.log(data))
}


postButton.addEventListener('click', newPost);

function newPost() {
  fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      title: title.value,
      body: body.value,
    })
  })
    .then(response => response.json())
    .then(data => console.log(data))
}


putButton.addEventListener('click', editPost);

function editPost() {
  fetch('https://jsonplaceholder.typicode.com/todos/5',{
            method: 'PUT',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                title: title.value,
                body: body.value,
            })
        })
        .then(response =>response.json())
        .then(data =>console.log(data))
}


patchButton.addEventListener('click', editPostInt);

function editPostInt() {
    fetch('https://jsonplaceholder.typicode.com/todos/1', {

                method: 'PATCH',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({
                 bas: title.value,
                 body: body.value,
                })
        })
        .then(response =>response.json())
        .then(data =>console.log(data))
}


deleteButton.addEventListener('click', deletePost);

function deletePost() {
     fetch('https://jsonplaceholder.typicode.com/todos/1',{
            method:"DELETE"
        })
        .then(response => response.json())
        .then(data => console.log(data))
}