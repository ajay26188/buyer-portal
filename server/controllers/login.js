require('dotenv').config()
const loginRouter = require('express').Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

loginRouter.post('/',async(request,response) => {
    const {email, password} = request.body

    //we use .findOne to find one user
    const user = await User.findOne({email})

    const correctPassword = user === null ? false : await bcrypt.compare(password, user.passwordHash)

    if (!(user && correctPassword)) {
        return response.status(401).json({error: 'invalid email or password'})
    }

    const userForToken = {
        email: user.email,
        id: user._id
    }
    const token = jwt.sign(userForToken, process.env.SECRET)

    response
    .status(200)
    .json({token: token, email: user.email})
})

module.exports = loginRouter