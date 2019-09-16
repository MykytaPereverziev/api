//server Node JS
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
/*
app.get('/', (req, res) => {
    res.send('Hello world');
});
*/
const users = [
    {
      id: 0,
      name: 'Petya',
      surname: 'Pupkin',
    },
    {
      id: 1,
      name: 'Lusya',
      surname: 'Pupkina',
    },
  ];

app.use('/', express.static('./public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

//endpoints

app.get('/users', (req, res) => {
    setTimeout(() => {
    //console.log(req);
    res.send(users);
}, 2000);
})

app.get('/users/:search', (req, res) => {
    console.log(typeof req.params.search);
    //let user = users.find(user => user.id == req.params.id);
    //res.send(user);
    let query =req.params.search;
    let user = users.find(user => {
        return (
            user.id === +query 
        || user.name.toLocaleLowerCase() === query.toLocaleLowerCase()
        || user.surname.toLocaleLowerCase() === query.toLocaleLowerCase()
        )
    });
    //let user = users.find(user => Object.values(user).includes(query));
    res.send(user);
});

app.post('/users', (req, res) => {
    console.log(req.body);
    const user = {
        id: users.length,
        name: req.body.name,
        surname: req.body.surname
    };
    users.push(user);
    //res.send(users);
    res.status(404).send(users);
});

// метод listen
app.listen(port, () => {
    console.log(` Server listen port: ${port} `);
});