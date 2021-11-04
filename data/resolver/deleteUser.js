import { Users } from '../../db/dbConnector.js'
const isAuthenticated = require('./../../authentication/isAuthenticated')
const { ValidationError, ForbiddenError } = require('apollo-server-hapi')

export default async function DeleteUser(userId, context) {
    const userInformation = await isAuthenticated.isValidUser(context.auth)
    if (!userInformation) throw new ValidationError('Unauthorized user')
    else if (userInformation.role !== 'TEACHER') throw new ForbiddenError('Your are not permitted to do this')
    else {
        try {
            await Users.findByIdAndDelete(userId)
            return true
        }
        catch (err) {
            return false
        }
    }
}