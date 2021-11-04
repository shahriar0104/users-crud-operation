import { Posts, Comments } from '../../db/dbConnector.js'
const isAuthenticated = require('./../../authentication/isAuthenticated')
const { ValidationError, ForbiddenError } = require('apollo-server-hapi')

export default async function DeletePost(postId, context) {
    const userInformation = await isAuthenticated.isValidUser(context.auth)
    if (!userInformation) throw new ValidationError('Unauthorized user')
    else if (userInformation.role !== 'TEACHER') throw new ForbiddenError('Your are not permitted to do this')
    else {
        try {
            const post = await Posts.findById(postId).exec()
            if (post.owner !== userInformation.username)
                throw new ForbiddenError('Your are not the owner of this post')
            else {
                await Posts.findByIdAndDelete(postId)
                await Comments.deleteMany({ "postId": postId })
                return true
            }
        }
        catch (err) {
            return false
        }
    }
}