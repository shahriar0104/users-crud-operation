
// query findPost($PostId:PostId){
//     getPostById(postId:$PostId){
//       title
//       details
//       comments{
//         commentor
//         commentDetails
//       }
//       }
//     }
//   }

//   {
//     "PostId":{
//       "_id":"617e429d82577ddad5d78eb5"
//     }
//   }



// mutation addPost($post: PostInput){
//     createPost(postInput: $post) {
//       title
//       details
//       comments{
//         postId
//         commentor
//         commentDetails
//       }
//     }
//   }

//   {
//     "post":{
//       "title":"first post",
//       "details":"Allah vorosha"
//     }
//   }



// query findAllpost{
//     getAllPost {
//       title
//       details
//       comments{
//         commentor
//         commentDetails
//       }
//     }
//   }

// mutation deletePost($postId: PostId){
//     deletePost(postId:$postId)
//   }

//   {
//     "postId":{
//       "_id":"617e63750414e6532bb1c6d7"
//     }
//   }




// mutation upDatePost($postId: PostId, $update: UpdatedDetails){
//     updatePost(postId:$postId, updatedDetails: $update)
//   }

//   {
//     "postId":{
//       "_id":"617e708575610c491d055461"
//     },
//     "update":{
//       "details":"update details"
//     }
//   }



// mutation addComment($comment:CommentInput){
//     createComment(commentInput: $comment) {
//       postId
//       commentor
//       commentDetails
//     }
//   }

//   {
//     "comment":{
//       "postId":"617e63750414e6532bb1c6d7",
//       "commentor":"randoom second post",
//       "commentDetails":"comment checking"
//     }
//   }