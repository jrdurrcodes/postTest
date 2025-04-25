const express = require('express')
const router= express. Router()
const axios = require('axios')
const PORT = process.env.PORT || 3000

router.use(express.static('public'))

//root route
router.get('/api', (req, res)=> {
    res.json({
        "all users": `http://localhost:${PORT}/api/user`
    })
})

router.use('/api/user', require('./api/userRoutes'))


router.get('/', (req, res)=> {
    res.render('pages/home', {
        title: "Home",
        name: 'Home'
    })
})

// al users
router.get('/user', (req, res)=> {

    const url = `http://localhost:${PORT}/api/user`

    axios.get(url)
    .then(resp => {
        res.render('pages/allUsers', {
            title: 'Users',
            name: 'All Users',
            data: resp.data
        })
    })


})

router.get('/userForm', (req, res)=> {

    res.render('pages/userForm', {
        title: 'Create Account',
        name: 'Create Account'
    })
})


router.post('/api/user/post', (req, res)=> {

    axios.post(`http://localhost:${PORT}/api/user/post`, 
        {
            first_name: req.body.first_name.toLowerCase(),
            last_name: req.body.last_name.toLowerCase(),
            email: req.body.email.toLowerCase(),
            password: req.body.password,
            imgUrl: req.body.imgUrl
        }
    ).then(resp => {
        console.log(resp)
    }).catch(err => {
        console.log(err)
    
    })
    
})




    


module.exports = router