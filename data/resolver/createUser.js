import { Users } from '../../db/dbConnector.js'
const isAuthenticated = require('./../../authentication/isAuthenticated')
const {  ValidationError, ForbiddenError } = require('apollo-server-hapi')

export default async function CreateUser(createUserInput, context) {
    const userInformation = await isAuthenticated.isValidUser(context.auth)
    if (!userInformation) throw new ValidationError('Unauthorized user')
    else if (userInformation.role !== 'TEACHER') throw new ForbiddenError('Your are not permitted to do this')
    else {
        const newUser = new Users({
            username: createUserInput.username,
            email: createUserInput.email,
            password: createUserInput.password,
            role: createUserInput.role
        })
        newUser.id = newUser._id

        return new Promise((resolve, reject) => {
            newUser.save((err) => {
                if (err) reject(err)
                else resolve(newUser)
            })
        })
    }
}