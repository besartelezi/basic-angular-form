const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = 9500;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );

app.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});


let allFriends = [{firstName: 'Coach', lastName: 'Tim', email: 'tim.broos@becode.org', phone: '0469420666', signatureMove: 'Yeet', favouriteLanguage: 'Javascript'}];

// Below you can define how your API handles a get or a post request.
// Try sending a get request to the root, you should get a "Hello from server" back.


app.get('/', function (request, response) {
    response.send('Hello from server');
});

app.post('/', function (request, response) {
    response.status(200).send({"message": "Data received"});
});

app.get('/allfriends', (request, response) => {
    response.send(JSON.stringify(allFriends));
});

app.post('/addfriend', (request, response) => {
    allFriends.push(request.body);
});

app.listen(PORT, function () {});
