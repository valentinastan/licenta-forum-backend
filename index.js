const express = require('express');
const postsRoutes = require('./routes/posts')
const commentsRoutes = require('./routes/comments')
const app = express();
const morgan = require('./config/morgan')


app.use(express.json());
app.use(morgan)

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
})

app.use('/api', commentsRoutes)
app.use('/api', postsRoutes)


app.listen(2222)