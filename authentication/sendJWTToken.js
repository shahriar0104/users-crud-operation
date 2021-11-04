const jwt = require('jsonwebtoken')

exports.sendToken = (username, role) => {
    const token = jwt.sign({ username: username, role: role },
        process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE })
    return { token }
}