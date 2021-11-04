import { Posts, Comments, Users } from '../../db/dbConnector.js'
const sendJWTToken = require('./../../authentication/sendJWTToken')
const isAuthenticated = require('./../../authentication/isAuthenticated')
const { UserInputError, ValidationError, ForbiddenError } = require('apollo-server-hapi')

export default async function SignIn(signInInput) {
    const username = signInInput.username;
    const password = signInInput.password;
    const user = await Users.findOne({ username }).select('password')
    const userRole = await Users.findOne({ username }).select('role')
    if (!user) throw new UserInputError('Invalid username!')
    else {
        if (await user.matchPasswords(password, user.password)) {
            const { token } = sendJWTToken.sendToken(username, userRole.role)
            return { JWT: token, username: username, role: userRole.role }
        }
        else {
            throw new UserInputError('Wrong Password')
        }
    }
}