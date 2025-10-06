const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// To Serve static page using app.use. Here public folder will be served with default index.html
// app.use(express.static(path.join(__dirname, 'public')))

// Creating Middleware and calling it from app.use and next() is written basically to call next middle ware if any present or written in code
// const myMiddleWare = (req, res, next) => {
//     console.log('Arunesh Middleware')
//     next();
// }

// app.use(myMiddleWare);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

//http://localhost:3000/about/Arunesh URL has to be passed like this
app.get('/about/:name', (req, res) => {
    res.send('Hello ' + req.params.name)
})

//http://localhost:3000/aboutArunesh  URL has to be passed like this
app.get('/about:name', (req, res) => {
    res.send('Hello ' + req.params.name)
})

app.get('/file', (req, res) => {
    // res.sendFile(path.join(__dirname, 'index.html'))
    // res.status(500) //This will send the status code 500
    res.json({ "Arunesh": 32 })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})