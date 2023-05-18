const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');
let port =  process.env.PORT || 8000;
 
let staticPath = path.join(__dirname, "../public");

let template_path = path.join(__dirname, "../templates/views");

const partials_path = path.join(__dirname, "../templates/partials");

// how to change path -> answer is down 
 /// console.log(path.join(__dirname,"../public")
app.use(express.static(staticPath));



app.set('view engine', 'hbs');
app.set('views', template_path)
hbs.registerPartials(partials_path)

app.get('/index', (req, res) => {
    res.render('index')
});

app.get('/about', (req, res) => {
    res.render('about')
});

app.get('/weather', (req, res) => {
    res.render('weather')
});
app.get('*', (req, res) => {
    res.render('404error', {
        errorMsg : 'Oops Page Not found'
    })
});

app.listen(port, () => {
    console.log(`Listenting to port ${port}`)
});