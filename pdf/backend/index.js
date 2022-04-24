require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();

// connectDB
const connectDB = require('./db/connect')
const authenticateUser = require('./middleware/authentication')
// ROUTERS
const authRouters = require('./routes/auth')
const jobsRouters = require('./routes/jobs')
// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.json());
// extra packages

// routes
app.use('/api/v1/auth',authRouters)
app.use('/api/v1/jobs',authenticateUser,jobsRouters)

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
