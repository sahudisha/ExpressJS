const express = require('express')
//Used npm install express-handlebars package
const { engine } = require('express-handlebars');

const app = express()
const port = 3000

//Implemented handlebars engine 
app.engine('handlebars', engine());
app.set('view engine', 'handlebars')

app.use('/', require('./routes/blog'))

app.listen(port, () => {
  console.log(`Blog app listening on port ${port}`)
})