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
/*Do in class    
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
    */

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

   //Do at home:

class Fetch(){
    constructor(){

    };
    get(url){
        return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = () => { 
            const response = JSON.parse(xhr.responseText);
        resolve(response);
        }
        xhr.onerror = () => {
            reject(JSON.parse(xhr.responseText));
        }
        xhr.send()
    });
};
    post(url, body){
        return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.onload = () => { 
            resolve(JSON.parse(xhr.responseText));
        }
        xhr.onerror = () => {
            reject(JSON.parse(xhr.responseText));
        }
        xhr.send(JSON.stringify(body))
    });

    getByParams(url, parametr){
        return this.get(`${url}/${param}`)
    }
};

let fetch = new Fetch();
fetch.get('/users').then(res => console.log(res));

fetch.post('/users', {name: 'Jenny', surname: 'Smith'}).then(res => console.log(res));

fetch.getByParams('/users', 'Smith').then(res => console.log(res));