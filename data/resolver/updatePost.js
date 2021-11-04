import {Posts} from '../../db/dbConnector.js'
const isAuthenticated = require('./../../authentication/isAuthenticated')
const {ValidationError, ForbiddenError} = require('apollo-server-hapi')

export default async function UpdatePost (postId, updatedDetails, context) {
    const userInformation = await isAuthenticated.isValidUser(context.auth)
            
            if(!userInformation) throw new ValidationError('Unauthorized user')
            else if(userInformation.role !== 'TEACHER') throw new ForbiddenError('Your are not permitted to do this')
            else{
                try {
                    await Posts.findByIdAndUpdate(postId,{
                        details: updatedDetails.details
                    })
                    return true
                } catch(err) {
                    return false
                }
            }
}