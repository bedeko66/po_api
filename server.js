const express = require('express');
const app = express();
const cors = require('cors')
const morgan = require("morgan");
const compression = require("compression");
const helmet = require("helmet");
const middlewares = require("./middlewares");
const apiRouter = require('./api/index');
//const { doSeed } = require('./seeds/suppliers/suppliers.seed')
//const database = require('./config/postgres')
const database = require('./config/mysql_db')
//require('./models/main/model.init')()
database.connect();
database.syncronize();

app.use(helmet());
app.use(compression());
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use('/', apiRouter);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);


const port = process.env.PORT || 5050;

app.listen(port, () => {
    console.log(`Server running on ${port}`);
})

