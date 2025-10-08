const express = require('express')
const app = express()
const port = 3000

app.use('/', require('./routes/blog'))

app.listen(port, () => {
  console.log(`Blog app listening on port ${port}`)
})