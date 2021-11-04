import {Posts, Comments} from '../../db/dbConnector.js'
const isAuthenticated = require('./../../authentication/isAuthenticated')
const { ValidationError } = require('apollo-server-hapi')

export default async function CreateComment (commentInput, context) {
    const userInformation = await isAuthenticated.isValidUser(context.auth)
    console.log(userInformation.username)
    if(!userInformation) throw new ValidationError('Unauthorized user')
    else
    {
        const newComment = new Comments({
            postId: commentInput.postId,
            commentor: userInformation.username,
            commentDetails: commentInput.commentDetails
        })

        newComment.id = newComment._id

        return new Promise((resolve, reject) => {
            newComment.save((err) => {
                if(err) reject (err)
                else{
                    Posts.findById(commentInput.postId)
                    .then((post) => {
                        post.comments.push(newComment.id)
                        post.save()
                    })
                    resolve (newComment)
                } 
            })
        })
    }
}