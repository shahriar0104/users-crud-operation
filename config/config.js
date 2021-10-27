export const PORT = 4000;
export const environment = {
    development: {
        serverURL: `http://localhost:${PORT}/`,
        dbString: 'mongodb+srv://root:anik0104@cluster0.hgvwf.mongodb.net/users-crud?retryWrites=true&w=majority'
    },
    production: {
        serverURL: `http://localhost:${PORT}/`,
        dbString: 'mongodb+srv://root:anik0104@cluster0.hgvwf.mongodb.net/users-crud?retryWrites=true&w=majority'
    }
}
