const express = require("express");
const bodyParser = require("body-parser");

const indexRouter = require("./routes/index")

const app = express();
const port = 3000;
app.set('port', port);
    
    app.use(bodyParser.json({
        limit:'5mb'
    }));

    indexRouter(app);

    module.exports = app;