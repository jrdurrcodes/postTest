const router = require('express').Router()

const dao = require('../../daos/dao')

router.get('/', (req, res)=> {
    dao.findAll(res, dao.table)
})

router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})

router.post('/post', (req, res)=> {
    dao.create(req, res, dao.table)
    // axios.post(`http://localhost:${PORT}/api/user/post`, 
    //         {
    //             first_name: req.body.first_name.toLowerCase(),
    //             last_name: req.body.last_name.toLowerCase(),
    //             email: req.body.email.toLowerCase(),
    //             password: req.body.password,
    //             imgUrl: req.body.imgUrl
    //         }
    //     ).then(resp => {
    //         console.log(resp)
    //     }).catch(err => {
    //         console.log(err)
        
    //     })
        
        
})


module.exports = router