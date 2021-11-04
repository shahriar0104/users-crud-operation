require('dotenv').config()
import { ApolloServer } from 'apollo-server-hapi';
import { resolvers } from '../data/resolver/resolvers.graphql';
import { typeDefs } from '../data/schema.graphql';
import Hapi from '@hapi/hapi';
import { PORT } from '../config/config';

const init = async () => {

    const app = Hapi.server({
        port: PORT,
        routes:{
            cors:true
        }
    });
    
    const server = new ApolloServer({
        typeDefs, resolvers
        ,
        context:({req, h}) => {
            let auth = ''
            if(h.request.headers.authorization) auth = h.request.headers.authorization.split(' ')[1]
            return {auth}
        }
    });

    await server.start();
    await server.applyMiddleware({ app, cors: true });
    await app.start();

    console.log('Server running on port 4000');
};

init().then(r => console.log('server started'));