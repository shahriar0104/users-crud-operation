const mongoose = require('mongoose');
const { environment } = require('../config/config');
const { commentSchema } = require('./schema/commentSchema.ts')
const { postsSchema } = require('./schema/postsSchema.ts');
const { studentSchema } = require('./schema/studentSchema.ts')
const env = process.env.NODE_ENV || "development";

/**
 * Mongoose Connection
**/

mongoose.connect(environment[env].dbString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let db = mongoose.connection;
db.on('error', () => {
    console.error("Error while connecting to DB");
});

const Posts = mongoose.model('Post', postsSchema);
const Comments = mongoose.model("Comment", commentSchema)
const Students = mongoose.model("Students", studentSchema)

export { Posts, Comments };