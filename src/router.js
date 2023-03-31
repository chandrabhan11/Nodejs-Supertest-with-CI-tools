
const UserController = require("./controllers/user");
module.exports = Router = (app) => {
    // welcome route
    app.get('/', (req, res) => {
        res.json({ message: 'Welcome to my Node.js API' });
    });

    // user route
    app.post("/user/create", UserController.create);
    app.get("/user/list", UserController.list);

    // invalid url
    app.use('*', (req, res, next) => {
        throw 'Exception: Invalid URL';
    });
};