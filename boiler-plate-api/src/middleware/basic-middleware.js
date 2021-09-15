//return basic middleware
const BasicMiddleWare = async (req, res, next) => {
    res.locals.result = 'Hello World!';
    next();
}

module.exports = BasicMiddleWare;