
/*axios.post('/users', {name: 'Kostian', surname: 'Gykov'}).then(res => {
    console.log(res);
}).catch(err => console.log(err));
*/
/*
const xhr = new XMLHttpRequest();
xhr.open('GET','/users');
xhr.onload = () => {console.log(xhr.responseText)};
xhr.send();
*/

//let promiseObj = new Promise((reselve, reject) => {
    const fetchApi = url => {
    return new Promise((reselve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => { 
        const response = JSON.parse(xhr.responseText);
    reselve(response);
    };
    xhr.onerror = () => {
        const err = JSON.parse(xhr.responseText);
        rejects(err);
    };
    xhr.send();
});
    }
    fetchApi('/users').then(reselve => {
        console.log(reselve)
    });
     
    /*
    promiseObj.then(reselve =>{
        console.log(reselve)
    });
*/
    /*
    setTimeout(() => {
        //reselve(5 + 5) }, 2000);
        //reject(5 + 5) }, 2000);
   
});
console.log('start', new Date().getSeconds());
promiseObj.then(reselve => {
    console.log(reselve);
console.log('end', new Date().getSeconds());
}).catch((err) => {console.log(err)});
*/
//console.log('end', new Date().getSeconds());

