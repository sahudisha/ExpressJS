const express = require('express')
const router = express.Router();
const path = require('path');
const blogs = require('../data/blogs')

// router.get('/test/:name', (req, res) => {
//     res.send('Hello World! ' + req.params.name)
// })

router.get('/', (req, res) => {
    //res.sendFile requires full file path that needs to be send
    //__dirname means current directory
    res.sendFile(path.join(__dirname, '../templates/Homepage.html'))
})

router.get('/blog', (req, res) => {
    // blogs.forEach(e => {
    //     console.log(e.title)
    // });
    res.sendFile(path.join(__dirname, '../templates/BlogHome.html'))
})

router.get('/blogpost/:slug', (req, res) => {
    let myblogs = blogs.filter((e) => {
        return e.slug == req.params.slug
    })
    // console.log(myblogs)
    res.sendFile(path.join(__dirname, '../templates/BlogPage.html'))
})

module.exports = router;