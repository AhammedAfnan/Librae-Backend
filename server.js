const express = require('express');
const connectDB = require('./config/db.js')
const router = require("./routes/bookRoutes.js")
const errMiddleware = require("./middleware/errorMiddleware.js")
const cors = require("cors")
require('dotenv').config()

const app = express();
app.use(cors())
connectDB()

app.use(express.json());
app.use('/books', router)

app.use(errMiddleware);

app.listen(3000, () => console.log('Server running on port 3000'));
