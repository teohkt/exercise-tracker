const router = require('express').Router();
const User = require('../models/user.model');

// Read All Users
router.get('/', (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Create new User
router.post('/add', (req, res) => {
    const username = req.body.username;
    const newUser = new User({username});

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;