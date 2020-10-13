const express = require('express');
const app = express();
const cors = require('cors')
const morgan = require("morgan");
const compression = require("compression");
const helmet = require("helmet");
const middlewares = require("./middlewares");

//const { doSeed } = require('./seeds/suppliers/suppliers.seed')



app.use(helmet());
app.use(compression());
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

//const database = require('./config/postgres')
const database = require('./config/database')
database.connect();
database.syncronize();

const foodProductsRouter = require('./api/foodProducts/foodProductRoutes')
app.use("/products/food", foodProductsRouter);

const stocksRouter = require('./api/stocks/stocksRoutes')
app.use("/products/food", stocksRouter);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);


const port = process.env.PORT || 5050;
app.listen(port, () => { console.log(`Server running on ${port}`); })
