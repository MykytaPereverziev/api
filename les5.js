//GET, POST
//PUT - ЗАПРОС ПО МОДЕРНИЗАЦИИ, например изменить имя user
//DELETE - УДАЛЯЕТ (но можно и создать пользователя)
const getLastFiveBooks = bookObj => {
    let arr = bookObj.items.splice(4, 5);
    //console.log(arr);
};
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=harry', false);
xhr.onload = () => {
    let response = JSON.parse(xhr.responseText);
    //getLastFiveBooks(response);
    console.log(arr);
    //console.log(JSON.parse(xhr.responseText));
};
xhr.send();
