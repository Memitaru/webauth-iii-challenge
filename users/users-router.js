const router= require('express').Router();
const bcrypt = require('bcryptjs');
const tokenService = require('../auth/token-service.js')

const Users = require('../users/users-model.js');

const {auth} = require('../auth/authenticate.js');

router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10)
    user.password = hash;

    Users.add(user)
        .then(saved => {
            const token = tokenService.generateToken(user);
            res.status(201).json({user, token})
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
})

router.post('/login', (req, res) => {
    let {username, password} = req.body;

    Users.getBy({username})
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)){
                const token = tokenService.generateToken(user);
                res.status(200).json({
                    message: `Welcome ${user.username}`, token
                })
            } else {
                res.status(401).json({message: "Incorrect login information"})
            }
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
})

router.get('/users', auth, (req, res) => {
    Users.get()
    
        .then(users => {
            res.status(200).json(users)
        })
})

module.exports = router;