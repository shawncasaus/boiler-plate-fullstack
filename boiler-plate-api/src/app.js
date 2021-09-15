const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const BasicMiddleWare = require('./middleware/basic-middleware');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

//gets object of word count from passed through url
app.get('/api/hello-world/', BasicMiddleWare, (req, res, next) => {
    res.send(res.locals.result);
});


app.listen(PORT, () => console.log('Server running on port ', PORT));