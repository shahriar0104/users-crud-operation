import { ApolloServer } from 'apollo-server-hapi';
import { resolvers } from '../data/resolvers.graphql';
import { typeDefs } from '../data/schema.graphql';
import Hapi from '@hapi/hapi';
import { PORT } from '../config/config';

const init = async () => {

    const app = Hapi.server({
        port: PORT
    });
    const server = new ApolloServer({typeDefs, resolvers });

    await server.start();
    await server.applyMiddleware({ app, cors: true });
    await app.start();

    console.log('Server running on port 4000');
};

init().then(r => console.log('server started'));

