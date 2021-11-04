const { promisify } = require('util')
const jwt = require('jsonwebtoken')

exports.isValidUser = async (token) => {
    try {
        const decoder = await promisify(jwt.verify)(token, process.env.JWT_SECRET)
        return { username: decoder.username, role: decoder.role }
    } catch (err) {
        return false;
    }
}