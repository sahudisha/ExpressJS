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
    // res.sendFile(path.join(__dirname, '../views/Homepage.html'))

    //This is handlebars rendering
    res.render('home', {
        blogs: blogs
    });
})

router.get('/blog', (req, res) => {
    // blogs.forEach(e => {
    //     console.log(e.title)
    // });
    res.sendFile(path.join(__dirname, '../views/BlogHome.html'))
})

router.get('/blogpost/:slug', (req, res) => {

    //this is normal express rendering
    let myblogs = blogs.filter((e) => {
        return e.slug == req.params.slug
    })
    // console.log(myblogs) here myblogs is an array
    res.render('BlogPost', {
        title: myblogs[0].title,
        content: myblogs[0].content
    })
    // res.sendFile(path.join(__dirname, '../views/BlogPage.html'))
})

module.exports = router;