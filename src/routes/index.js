const { Router } = require('express');
const router = Router();

const { getUsers } = require('../controllers/index'); 

router.get('/users', (req, res) => {
    res.send({message: 'users'});
})


module.exports = router;