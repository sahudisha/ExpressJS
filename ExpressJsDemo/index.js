const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// To Serve static page using app.use. Here public folder will be served with default index.html
// app.use(express.static(path.join(__dirname, 'public')))

// Creating Middleware and calling it from app.use
// const myMiddleWare = (req, res, next) => {
//     console.log('Arunesh Middleware')
//     next();
// }

// app.use(myMiddleWare);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('Hello About!')
})

app.get('/file', (req, res) => {
    // res.sendFile(path.join(__dirname, 'index.html'))
    // res.status(500) //This will send the status code 500
    res.json({ "Arunesh": 32 })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})