import { Posts } from '../../db/dbConnector.js'
const isAuthenticated = require('./../../authentication/isAuthenticated')
const {  ValidationError, ForbiddenError } = require('apollo-server-hapi')

export default async function CreatePost (postInput, context) {
    const userInformation = await isAuthenticated.isValidUser(context.auth)

    if (!userInformation) throw new ValidationError('Unauthorized user')
    else if (userInformation.role !== 'TEACHER') throw new ForbiddenError('Your are not permitted to do this')
    else {
        const newPost = new Posts({
            title: postInput.title,
            owner: userInformation.username,
            details: postInput.details,
        })

        newPost.id = newPost._id

        return new Promise((resolve, reject) => {
            newPost.save((err) => {
                if (err) reject(err)
                else resolve(newPost)
            })
        })
    }
}