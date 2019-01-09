const express = require('express');

const app = express();

//set a view engine
app.set('view engine', 'ejs');

// set the home route
app.get('/', (req, res) => {
    res.render('home', {title: 'OAth app'});
})

//set the listen port
app.listen(3000, () => {
    console.log('you\'re now listening in port 3000');
})